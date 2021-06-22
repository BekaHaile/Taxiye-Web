import * as actions from "../../actions/corporate";
import axios from "axios";
import { validateEmail, showError } from "../common";

export const corporate = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate;

  if (
    action.type == "COMPANY_NAME_ADDED" ||
    action.type == "COMPANY_OFFICIAL_EMAIL_ADDED" ||
    action.type == "COMPANY_PHONE_NUMBER_ADDED" ||
    action.type == "NUMBER_OF_EMPLOYEES_ADDED" ||
    action.type == "CORPORATE_TERMS_CHANGED"
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
      validateEmail(data["company_email"]) &&
      data["agreeToTerms"]
    )
      next(actions.setValidation(true));
    else next(actions.setValidation(false));
  } else if (
    action.type == "ADMIN_NAME_ADDED" ||
    action.type == "ADMIN_EMAIL_ADDED" ||
    action.type == "ADMIN_PASSWORD_ADDED" ||
    action.type == "ADMIN_CONFIRMATION_PASSWORD_ADDED"
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
      validateEmail(data["admin_email"]) &&
      data["password"].length >= 6
    )
      next(actions.setAdminValidation(true));
    else next(actions.setAdminValidation(false));
  } else if (action.type == "COMPANY_DATA_SUBMIT_INITIATED") {
    try {
      next(actions.initiateLoading(true));
      await submitCompanyData({});
      next(actions.initiateLoading(false));
      next(actions.goToStep(2));
    } catch (e) {
      next(actions.setValidation(false));
    }
  } else if (action.type == "ADMIN_DATA_SUBMIT_INITIATED") {
    try {
      next(actions.initiateLoading(true));
      await submitCompanyAdminData({});
      next(actions.initiateLoading(false));
      next(actions.goToStep(4));
    } catch (e) {
      next(actions.setValidation(false));
    }
  } else if (action.type == "CORPORATE_OTP_RESENT") {
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
  } else if (action.type == "CORPORATE_OTP_SUBMITTED") {
    next(actions.initiateLoading(true));
    try {
      let res = await submitPhone({
        phone_no: `${data["country_code"]}${data["phone_no"]}`,
        country: `${data["country"]}`,
      });
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
  }
};

async function submitCompanyData(data) {
  try {
    await sleep(2000);
    return [];
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
async function submitCompanyAdminData(data) {
  try {
    await sleep(2000);
    return [];
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

async function submitPhone(data) {
  try {
    await sleep(2000);
    return { status: "OK" };
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
