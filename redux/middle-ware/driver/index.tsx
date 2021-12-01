import * as actions from "../../actions/driver";
import * as actionTypes from "../../types/driver";
import { showError } from "../common";
import * as driverApi from "../../../services/api/driver/index.api";
import driverSignupDto from "../../../models/driver/driverSignupDto";
import requiredDocumentsDto from "../../../models/driver/requiredDocumentsDto";
import submitOtpDto from "../../../models/driver/submitOtpDto";
import submitPhoneDto from "../../../models/driver/submitPhoneDto";

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
            var vehicles = res?.vehicle_types;
            vehicles.shift();
            next(actions.setDriverSignDetail(res, vehicles));
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
        next(actions.changeStep(data["step"] - 1));
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
    next(actions.driverFormSubmitted(true));
    next(actions.changeStep(data["step"] + 1));
  } else if (action.type == actionTypes.UPLOAD_PORTRAITE_IMAGE_INITIATED) {
    var id = await driverApi.uploadImage(data, next);
    next(actions.setUploadedPortraitePicture(id.id, 1));
  } else if (action.type == actionTypes.UPLOAD_DRIVER_LICENSE_IMAGE_INITIATED) {
    var id = await driverApi.uploadImage(data, next);
    next(actions.setUploadedDriverLicensePicture(id.id, 2));
  } else if (
    action.type == actionTypes.UPLOAD_OWNERSHIP_CERTIFICATE_IMAGE_INITIATED
  ) {
    var id = await driverApi.uploadImage(data, next);
    next(
      actions.setUploadedOwnershipCertificatePicture(id.id, data["step"] + 1)
    );
  } else if (action.type == actionTypes.UPLOAD_VEHICLE_IMAGE_INITIATED) {
    var id = await driverApi.uploadImage(data, next);
    next(
      actions.setUploadedVehiclePictures(
        id.frontId,
        id.backId,
        data["subStep"] + 1
      )
    );
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
