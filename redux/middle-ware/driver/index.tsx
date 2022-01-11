import * as actions from "../../actions/driver";
import * as actionTypes from "../../types/driver";
import { showError } from "../common";
import * as driverApi from "../../../services/api/driver/index.api";
import driverSignupDto from "../../../models/driver/driverSignupDto";
import requiredDocumentsDto from "../../../models/driver/requiredDocumentsDto";
import submitOtpDto from "../../../models/driver/submitOtpDto";
import submitPhoneDto from "../../../models/driver/submitPhoneDto";
import fileUploadDto from "../../../models/driver/fileUploadDto";
import driverFormDataDto from "../../../models/driver/driverFormDataDto";

export const driver = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().driver;

  if (
    action.type == actionTypes.DRIVER_FULLNAME_ADDED ||
    action.type == actionTypes.DRIVER_GENDER_ADDED ||
    action.type == actionTypes.DRIVER_COUNTRY_ADDED ||
    action.type == actionTypes.PHONE_ADDED ||
    action.type == actionTypes.TERMS_CHANGED
  ) {
    await validateUser(data, next);
  }
  if (action.type == actionTypes.PHONE_SUBMITTED) {
    next(actions.setLoading(true));
    try {
      let res = await driverApi.submitPhone(submitPhoneDto(data));
      if (res) {
        next(actions.changeStep(data["step"] + 1));
        next(actions.changeOtpStatus({ loading: false, otpSent: true }));
      } else {
        next(actions.changeOtpStatus({ loading: false, otpSent: false }));
      }
    } catch (e) {
      showError(next);
      next(actions.changeOtpStatus({ loading: false, otpSent: false }));
    }
  } else if (action.type == actionTypes.OTP_SUBMITTED) {
    next(actions.setLoading(true));
    try {
      let res = await driverApi.submitOtp(submitOtpDto(data));
      if (res) {
        let access_token =
          res.flag === 701 ? res?.access_token : res?.login?.access_token;
        next(actions.setDriverData(res.login, access_token));
        next(actions.changeOtpStatus({ loading: false, otpSent: true }));
        next(actions.setLoading(true));
        try {
          let res = await driverApi.getDriverSignupDetails(
            driverSignupDto(access_token)
          );
          if (res) {
            let defaultCity = res?.cities[0];
            let vehicles = res?.cities[0].vehicle_types;
            vehicles.shift();

            next(actions.setDriverSignDetail(res, vehicles, defaultCity));
            try {
              let docRes = await driverApi.fetchRequiredDocuments(
                requiredDocumentsDto(access_token)
              );
              next(actions.setRequiredDocuments(docRes.data));
              next(actions.changeStep(data["step"] + 1));
            } catch (e) {}
          }
          next(actions.setLoading(false));
        } catch (e) {
          showError(next);
          next(actions.setLoading(false));
        }
      } else {
        next(actions.changeOtpStatus({ loading: false, otpSent: false }));
      }
    } catch (e) {
      showError(next);
      next(actions.setLoading(false));
    }
  } else if (action.type == actionTypes.OTP_RESENT) {
    next(actions.changeOtpStatus({ loading: true, otpSent: false }));
    try {
      let res = await await driverApi.submitOtp(submitOtpDto(data));
      if (res) {
        next(actions.changeOtpStatus({ loading: false, otpSent: true }));
      } else {
        next(actions.changeOtpStatus({ loading: false, otpSent: false }));
      }
    } catch (e) {
      showError(next);
      next(actions.changeOtpStatus({ loading: false, otpSent: false }));
    }
  } else if (action.type == actionTypes.INITIATE_SUBMIT_DRIVER_FORM) {
    next(actions.setLoading(true));
    let res = await driverApi.updateDriverData(driverFormDataDto(data));
    next(actions.driverFormSubmitted(true));
    next(actions.changeStep(data["step"] + 1));
  } else if (action.type == actionTypes.INITIATE_UPLOAD_IMAGE) {
    let files = data["files"];
    let res = false;
    next(actions.changeUploadingStatus(true));
    for (let [file, index] of files) {
      next(actions.changeProgress(0));
      res = await driverApi.uploadImage(
        fileUploadDto(file, index, data["doc_type_num"], data["access_token"]),
        next
      );
      if (!res) break;
    }

    next(actions.changeUploadingStatus(false));
    if (res) {
      if (data["lastUpload"]) {
        next(actions.setLoading(true));
        let res = await driverApi.updateDriverData(driverFormDataDto(data));
        if (res) {
          next(actions.driverFormSubmitted(true));
          next(actions.changeStep(data["step"] + 1));
          next(actions.changeSubStep(0));
        } else {
          next(actions.setLoading(false));
        }
      } else {
        next(actions.changeSubStep(data["subStep"] + 1));
      }
    }
  } else if(action.type == actionTypes.DRIVER_CITY_ADDED){
    next(actions.setLoading(true));
    let docRes = await driverApi.fetchRequiredDocuments(
      requiredDocumentsDto(data["access_token"],)
    );
    next(actions.setRequiredDocuments(docRes.data));
    next(actions.setLoading(false));
  }
};

async function validateUser(data, next) {
  if (
    data["full_name"] != null &&
    data["full_name"] != "" &&
    data["gender"] != null &&
    data["gender"] != "" &&
    data["country"] != null &&
    data["country"] != "" &&
    data["phone_no"] != "" &&
    data["phone_no"] != null &&
    data["country_code"] != "" &&
    data["country_code"] != null &&
    data["isPhoneValid"] &&
    data["agreeToTerms"]
  )
    next(actions.validateFirstForm(true));
  else {
    next(actions.validateFirstForm(false));
  }
}
