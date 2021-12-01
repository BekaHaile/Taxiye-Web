import * as actions from "../../actions/user";
import * as navigationActions from "../../actions/navigation/";
import * as actionTypes from "../../types/user";
import * as userApi from "../../../services/api/user/index.api";
import submitPhoneDto from "../../../models/user/submitPhoneDto";
import submitOtpDto from "../../../models/user/submitOtpDto";
import * as validationUtils from "../../../utils/validation";
import { showError } from "../common";

export const user = (store) => (next) => async (action) => {
  let data = store.getState().user;
  if (action.type == "PHONE_SUBMITTED") {
    next(actions.changeOtp(""));
    next(actions.setLoading(true));
    try {
      let res = await userApi.submitPhone(submitPhoneDto(data), next);
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
  } else if (action.type == "OTP_RESENT") {
    next(actions.changeOtpStatus({ loading: true, otpSent: false }));
    try {
      let res = await userApi.submitPhone(submitPhoneDto(data), next);
      if (res) {
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
      let res = await userApi.submitOtp(submitOtpDto(data), next);
      if (res.user_data) {
        let access_token = generateToken(res.user_data.auth_key);
        next(actions.loginVerified(res.user_data));
        next(actions.setAccessToken(access_token));
        if (data.keepMeSignedIn) {
          localStorage.setItem("user_data", JSON.stringify(res.user_data));
          localStorage.setItem("access_token", access_token);
        }
        next(navigationActions.goTo("confirm"));
        next(actions.changeStep(data["step"] - 1));
        next(actions.changeOtpStatus({ loading: false, otpSent: true }));
      } else {
        next(actions.changeOtpStatus({ loading: false, otpSent: true }));
        showError(next);
      }
    } catch (e) {
      showError(next);
      next(actions.setLoading(false));
    }
  } else if (action.type == actionTypes.INITIATE_USER_LOG_OUT) {
    localStorage.removeItem("user_data");
    localStorage.removeItem("access_token");
    next(actions.commitUserLogout());
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

function generateToken(accessKey) {
  var CryptoJS = require("crypto-js");
  let access_token = CryptoJS.SHA256(
    accessKey + "nEkVmQh2771MvzGAsKxUUbISgHuCz1zZWfKFywMXCCUt7"
  ).toString();
  return access_token;
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
