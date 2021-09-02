import * as actions from "../../actions/driver";
import { showError } from "../common";
import axios from "axios";

export const driver = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().driver;

  if (
    action.type == "DRIVER_FULLNAME_ADDED" ||
    action.type == "DRIVER_GENDER_ADDED" ||
    action.type == "DRIVER_COUNTRY_ADDED" ||
    action.type == "DRIVER_PHONE_ADDED" ||
    action.type == "DRIVER_TERMS_CHANGED"
  ) {
    await validateUser(data, next);
  }
  if (action.type == "DRIVER_PHONE_SUBMITTED") {
    next(actions.setLoading(true));
    try {
      let res = await submitPhone({
        phone_no: `${data["country_code"]}${data["phone_no"]}`,
        country: `${data["country"]}`,
      });
      if (res) {
        if (res.status === "OK") {
          next(actions.changeStep(data["step"] + 1));
          next(actions.changeOtpStatus({ loading: false, otpSent: true }));
        } else {
          showError(next);
          next(actions.changeOtpStatus({ loading: false, otpSent: false }));
        }
      } else {
        next(actions.changeOtpStatus({ loading: false, otpSent: false }));
      }
    } catch (e) {
      showError(next);
      next(actions.changeOtpStatus({ loading: false, otpSent: false }));
    }
  } else if (action.type == "DRIVER_OTP_SUBMITTED") {
    next(actions.setLoading(true));
    try {
      let res = await submitPhone({
        phone_no: `${data["country_code"]}${data["phone_no"]}`,
        country: `${data["country"]}`,
      });
      if (res) {
        if (res.status === "OK") {
          next(actions.changeStep(data["step"] + 1));
          next(actions.changeOtpStatus({ loading: false, otpSent: true }));
        } else {
          next(actions.changeOtpStatus({ loading: false, otpSent: false }));
        }
      }
    } catch (e) {
      showError(next);
      next(actions.setLoading(false));
    }
  } else if (action.type == "DRIVER_OTP_RESENT") {
    next(actions.changeOtpStatus({ loading: true, otpSent: false }));
    try {
      let res = await submitPhone({
        phone_no: `${data["country_code"]}${data["phone_no"]}`,
        country: `${data["country"]}`,
      });
      if (res) {
        if (res.status === "OK") {
          next(actions.changeOtpStatus({ loading: false, otpSent: true }));
        } else {
          next(actions.changeOtpStatus({ loading: false, otpSent: false }));
        }
      }
    } catch (e) {
      showError(next);
      next(actions.changeOtpStatus({ loading: false, otpSent: false }));
    }
  } else if (action.type == "INITIATE_SUBMIT_DRIVER_FORM") {
    next(actions.setLoading(true));
    await sleep(3000);
    next(actions.driverFormSubmitted(true));
    next(actions.changeStep(data["step"] + 1));
  } else if (action.type == "UPLOAD_PORTRAITE_IMAGE_INITIATED") {
    var id = await uploadImage(data, next);
    next(actions.setUploadedPortraitePicture(id.id, 1));
  } else if (action.type == "UPLOAD_DRIVER_LICENSE_IMAGE_INITIATED") {
    var id = await uploadImage(data, next);
    next(actions.setUploadedDriverLicensePicture(id.id, 2));
  } else if (action.type == "UPLOAD_OWNERSHIP_CERTIFICATE_IMAGE_INITIATED") {
    var id = await uploadImage(data, next);
    next(
      actions.setUploadedOwnershipCertificatePicture(id.id, data["step"] + 1)
    );
  } else if (action.type == "UPLOAD_VEHICLE_IMAGE_INITIATED") {
    var id = await uploadImage(data, next);
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

async function submitPhone(data) {
  try {
    const { NEXT_PUBLIC_AGGREGATE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_AGGREGATE_HOST}/account/generate_login_otp`,
      data,
      { timeout: 5000 }
    );
    return res.data;
  } catch (e) {
    return null;
  }
}

async function uploadImage(data, next) {
  try {
    var i = 1;
    while (i < 100) {
      await sleep(1000);
      i += i * Math.random() * 5;
      next(actions.changeProgress(Math.floor(i)));
    }
    return { id: "1", frontId: "1", backId: "2" };
    const { NEXT_PUBLIC_AGGREGATE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_AGGREGATE_HOST}/account/generate_login_otp`,
      data,
      { timeout: 5000 }
    );
    return res.data;
  } catch (e) {
    return null;
  }
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
