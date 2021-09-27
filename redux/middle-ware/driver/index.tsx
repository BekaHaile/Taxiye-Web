import * as actions from "../../actions/driver";
import * as actionTypes from "../../types/driver";
import { showError } from "../common";
import axios from "axios";

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
      let res = await submitPhone({
        phone_no: `${data["country_code"]}${data["phone_no"]}`,
        operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
        app_version: 6010,
        login_type: 1,
        os_version: 11,
        device_type: 0,
        country_code: `${data["country_code"]}`,
      });
      if (res) {
        if (res.flag === 143) {
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
  } else if (action.type == actionTypes.OTP_SUBMITTED) {
    next(actions.setLoading(true));
    try {
      let res = await submitOtp({
        phone_no: `${data["country_code"]}${data["phone_no"]}`,
        country: `${data["country"]}`,
        operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
        app_version: 6010,
        login_type: 1,
        os_version: 11,
        telerickshaw_installed: 0,
        device_type: 0,
        locale: "en",
        client_id: "EEBUOvQq7RRJBxJm",
        device_rooted: 1,
        auto_n_cab_installed: 0,
        unique_device_id: "",
        uber_installed: 0,
        ola_installed: 0,
        login_otp: `${data["otp"]}`,
      });
      if (res) {
        if (res.flag === 407) {
          
          next(actions.setDriverData(res.login, res?.login?.access_token));
          next(actions.initiateLoadDriverDetail());
          try {
            let docRes = await fetchRequiredDocuments({
              access_token: `${res?.login?.access_token}`,
              login_documents: 3,
              operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
              app_version: 6010,
              login_type: 1,
              branding_image: 0,
              device_type: 0,
              task_type: 1,
              locale: "en",
            });
            next(actions.setRequiredDocuments(docRes.data));
          } catch (e) {}
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
  } else if (action.type == actionTypes.OTP_RESENT) {
    next(actions.changeOtpStatus({ loading: true, otpSent: false }));
    try {
      let res = await submitOtp({
        phone_no: `${data["country_code"]}${data["phone_no"]}`,
        operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
        app_version: 6010,
        login_type: 1,
        os_version: 11,
        device_type: 0,
        country_code: `${data["country_code"]}`,
      });
      if (res) {
        if (res.flag === 143) {
          next(actions.changeOtpStatus({ loading: false, otpSent: true }));
        } else {
          next(actions.changeOtpStatus({ loading: false, otpSent: false }));
        }
      }
    } catch (e) {
      showError(next);
      next(actions.changeOtpStatus({ loading: false, otpSent: false }));
    }
  } else if (action.type == actionTypes.INITIATE_GET_DRIVER_SIGNUP_DETAILS) {
    next(actions.setLoading(true));
    try {
      let res = await getDriverSignupDetails({
        access_token: `${data["access_token"]}`,
        operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
        app_version: 6010,
        login_type: 1,
        device_type: 0,
      });
      if (res) {
        if (res.flag === 143) {
          next(actions.setDriverSignDetail(res, res.vehicle_types));
        } else {
          showError(next);
        }
      }
      next(actions.setLoading(false));
    } catch (e) {
      showError(next);
      next(actions.setLoading(false));
    }
  } else if (action.type == actionTypes.INITIATE_SUBMIT_DRIVER_FORM) {
    next(actions.setLoading(true));
    await sleep(3000);
    next(actions.driverFormSubmitted(true));
    next(actions.changeStep(data["step"] + 1));
  } else if (action.type == actionTypes.UPLOAD_PORTRAITE_IMAGE_INITIATED) {
    var id = await uploadImage(data, next);
    next(actions.setUploadedPortraitePicture(id.id, 1));
  } else if (action.type == actionTypes.UPLOAD_DRIVER_LICENSE_IMAGE_INITIATED) {
    var id = await uploadImage(data, next);
    next(actions.setUploadedDriverLicensePicture(id.id, 2));
  } else if (
    action.type == actionTypes.UPLOAD_OWNERSHIP_CERTIFICATE_IMAGE_INITIATED
  ) {
    var id = await uploadImage(data, next);
    next(
      actions.setUploadedOwnershipCertificatePicture(id.id, data["step"] + 1)
    );
  } else if (action.type == actionTypes.UPLOAD_VEHICLE_IMAGE_INITIATED) {
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
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_TAXIYE_HOST}/v2/generate_login_otp`,
      data,
      { timeout: 10000 }
    );
    return res.data;
  } catch (e) {
    return null;
  }
}

async function submitOtp(data) {
  try {
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_TAXIYE_HOST}/driver/login`,
      data,
      { timeout: 10000 }
    );
    return res.data;
  } catch (e) {
    return null;
  }
}
async function fetchRequiredDocuments(data) {
  try {
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_TAXIYE_HOST}/fetch_required_docs`,
      data,
      { timeout: 10000 }
    );
    return res.data;
  } catch (e) {
    return null;
  }
}

async function getDriverSignupDetails(data) {
  try {
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_TAXIYE_HOST}/get_driver_signup_details`,
      data,
      { timeout: 10000 }
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
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_TAXIYE_HOST}/account/generate_login_otp`,
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
