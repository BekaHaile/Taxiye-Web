import * as actions from "../../actions/corporate";
import * as actionTypes from "../../types/corporate";
import * as validationUtils from "../../../utils/validation";
import { showError } from "../common";
import * as corporateApi from "../../../services/api/corporate/index.api";
import getCorporateUserDto from "../../../models/corporate/getCorporateUserDto";
import loginDto from "../../../models/corporate/loginDto";
import submitPhoneDto from "../../../models/corporate/submitPhoneDto";

export const corporate = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate;

  if (
    action.type == actionTypes.COMPANY_NAME_ADDED ||
    action.type == actionTypes.COMPANY_OFFICIAL_EMAIL_ADDED ||
    action.type == actionTypes.COMPANY_PHONE_NUMBER_ADDED ||
    action.type == actionTypes.NUMBER_OF_EMPLOYEES_ADDED ||
    action.type == actionTypes.CORPORATE_TERMS_CHANGED
  ) {
    if (
      data["company_name"] != "" &&
      data["company_name"] != null &&
      data["company_email"] != "" &&
      data["company_email"] != null &&
      data["phone_no"] != "" &&
      data["phone_no"] != null &&
      data["no_of_employees"] != "" &&
      data["no_of_employees"] != null &&
      data["isPhoneValid"] &&
      validationUtils.validateEmail(data["company_email"]) &&
      data["agreeToTerms"]
    )
      next(actions.setValidation(true));
    else next(actions.setValidation(false));
  } else if (
    action.type == actionTypes.ADMIN_NAME_ADDED ||
    action.type == actionTypes.ADMIN_EMAIL_ADDED ||
    action.type == actionTypes.ADMIN_PASSWORD_ADDED ||
    action.type == actionTypes.ADMIN_CONFIRMATION_PASSWORD_ADDED ||
    action.type == actionTypes.ENABLE_DISPATCH_CHANGED
  ) {
    if (
      data["admin_full_name"] != "" &&
      data["admin_full_name"] != null &&
      data["admin_email"] != "" &&
      data["admin_email"] != null &&
      data["password"] != "" &&
      data["password"] != null &&
      data["confirmation_password"] != "" &&
      data["confirmation_password"] != null &&
      data["password"] == data["confirmation_password"] &&
      validationUtils.validateEmail(data["admin_email"]) &&
      data["password"].length >= 6
    )
      next(actions.setAdminValidation(true));
    else next(actions.setAdminValidation(false));
  } else if (action.type == actionTypes.COMPANY_DATA_SUBMIT_INITIATED) {
    try {
      next(actions.initiateLoading(true));
      const res = await corporateApi.submitPhone(submitPhoneDto(data));
      next(actions.initiateLoading(false));
      if (res) {
        if (res.status === "OK") {
          next(actions.goToStep(2));
        } else {
          showError(next);
        }
      }
    } catch (e) {
      next(actions.setValidation(false));
      next(actions.initiateLoading(false));
    }
  } else if (action.type == actionTypes.ADMIN_DATA_SUBMIT_INITIATED) {
    try {
      next(actions.initiateLoading(true));
      await corporateApi.submitCompanyAdminData({});
      next(actions.initiateLoading(false));
      next(actions.goToStep(4));
    } catch (e) {
      next(actions.setValidation(false));
    }
  } else if (action.type == actionTypes.CORPORATE_OTP_RESENT) {
    next(actions.changeOtpStatus({ loading: true, otpSent: false }));
    try {
      let res = await corporateApi.submitPhone(submitPhoneDto(data));
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
  } else if (action.type == actionTypes.CORPORATE_OTP_SUBMITTED) {
    next(actions.initiateLoading(true));
    try {
      let res = await corporateApi.submitPhone(submitPhoneDto(data));
      if (res) {
        if (res.status === "OK") {
          next(actions.goToStep(3));
          next(actions.changeOtpStatus({ loading: false, otpSent: true }));
        } else {
          next(actions.changeOtpStatus({ loading: false, otpSent: false }));
        }
      }
    } catch (e) {
      showError(next);
      next(actions.initiateLoading(false));
    }
  } else if (
    action.type == actionTypes.ADDED_LOGIN_EMAIL ||
    action.type == actionTypes.KEEP_ME_SIGN_IN_CHANGED ||
    action.type == actionTypes.ADDED_LOGIN_PASSWORD
  ) {
    var valiation = validateLoginInput(data);
    next(actions.changeLoginValidation(valiation));
  } else if (action.type == actionTypes.INITIATED_LOGIN_TO_CORPORATE) {
    next(actions.initiateLoading(true));
    var res = await corporateApi.login(loginDto(data));
    if (data["keepMeSignedIn"])
      localStorage.setItem("corporate_detail", JSON.stringify(res));
    var infoRes = await corporateApi.getUserInfo(getCorporateUserDto(res));
    localStorage.setItem("company_detail", JSON.stringify(infoRes));
    next(actions.setLogin(res, infoRes));
    next(actions.initiateLoading(false));
  } else if (action.type == actionTypes.LOG_OUT_INITIATED) {
    next(actions.logout());
  } else if (action.type == actionTypes.LOGGED_OUT) {
    localStorage.removeItem("corporate_detail");
  }
};

function validateLoginInput(data) {
  return (
    validationUtils.validateInput(data["login_password"]) &&
    validationUtils.validateEmail(data["login_email"]) &&
    data["login_password"].length >= 4
  );
}

