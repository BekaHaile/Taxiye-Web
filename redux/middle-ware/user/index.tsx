import * as actions from "../../actions/user";
import * as actionTypes from "../../types/user";
import axios from "axios";
import * as validationUtils from "../../../utils/validation";
import { showError } from "../common";

export const user = (store) => (next) => async (action) => {
  let data = store.getState().user;
  if (action.type == "PHONE_SUBMITTED") {
    next(actions.setLoading(true));
    try {
      let res = await submitPhone(
        `${data["country_code"]}${data["phone_no"]}`,
        `${data["country"]}`,
        `${data["country_code"]}`
      );
      if (res) {
        console.log(res.status);
        if (res.status === 200) {
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
  } else if (action.type == "OTP_RESENT") {
    next(actions.changeOtpStatus({ loading: true, otpSent: false }));
    try {
      let res = await submitPhone(
        `${data["country_code"]}${data["phone_no"]}`,
        `${data["country"]}`,
        `${data["country_code"]}`
      );
      if (res) {
        if (res.status === 200) {
          next(actions.changeOtpStatus({ loading: false, otpSent: true }));
        } else {
          next(actions.changeOtpStatus({ loading: false, otpSent: false }));
        }
      }
    } catch (e) {
      showError(next);
      next(actions.changeOtpStatus({ loading: false, otpSent: false }));
    }
  } else if (action.type == actionTypes.OTP_SUBMITTED) {
    next(actions.setLoading(true));
    try {
      let res = await submitOtp(
        `${data["country_code"]}${data["phone_no"]}`,
        `${data["country"]}`,
        `${data["country_code"]}`,
        `${data["otp"]}`
      );
      if (res) {
        if (res.status === 200) {
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
  } else {
    next(action);
    let new_data = store.getState().user;
    if (
      action.type == "FIRST_NAME_ADDED" ||
      action.type == "LAST_NAME_ADDED" ||
      action.type == "GENDER_CHANGED" ||
      action.type == "EMAIL_ADDED" ||
      action.type == "TERMS_CHANGED"
    )
      validateUser(new_data, next);
  }
};

async function submitPhone(phone_no, country, country_code) {
  try {
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `http://localhost:2002/v4/customer/generate_login_otp`,
      {
        phone_no: phone_no,
        country: country,
        operator_token: "8fa23305501d87e9b87ecac6a87d381b",
        country_code: country_code,
      },
      { timeout: 10000 }
    );
    return res;
  } catch (e) {
    return null;
  }
}

async function submitOtp(phone_no, country, country_code, otp) {
  try {
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `http://localhost:2002/v4/customer/verify_otp`,
      {
        phone_no: phone_no,
        country: country,
        operator_token: "8fa23305501d87e9b87ecac6a87d381b",
        country_code: country_code,
        login_type: "0",
        login_otp: otp,
      },
      { timeout: 10000 }
    );
    return res;
  } catch (e) {
    return null;
  }
}

async function validateUser(data, next) {
  if (
    data["user"]["firstName"] != null &&
    data["user"]["firstName"] != "" &&
    data["user"]["lastName"] != null &&
    data["user"]["gender"] != null &&
    data["user"]["lastName"] != "" &&
    data["agreeToTerms"] &&
    validationUtils.validateEmail(data["user"]["email"])
  )
    next(actions.setUserIsValid(true));
  else {
    next(actions.setUserIsValid(false));
  }
}
