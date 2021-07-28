import * as actionTypes from "../../types/corporate";
const initialState = {
  company_name: "",
  company_email: "",
  phone_no: "",
  country_code: "+251",
  country: "",
  isPhoneValid: false,
  agreeToTerms: false,
  isValid: false,
  no_of_employees: 1,
  loading: false,
  step: 1,
  otpSent: false,
  otp: "",
  isOtpValid: false,
  admin_full_name: "",
  admin_email: "",
  password: "",
  confirmation_password: "",
  enable_dispatch: false,
  isAdminValid: false,
};

export default function corporateReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.COMPANY_NAME_ADDED:
      return { ...state, company_name: action.payload.company_name };
    case actionTypes.COMPANY_OFFICIAL_EMAIL_ADDED:
      return { ...state, company_email: action.payload.company_email };
    case actionTypes.COMPANY_PHONE_NUMBER_ADDED:
      return {
        ...state,
        phone_no: action.payload.phone_no,
        country_code: action.payload.country_code,
        country: action.payload.country,
        isPhoneValid: action.payload.isPhoneValid,
      };
    case actionTypes.NUMBER_OF_EMPLOYEES_ADDED:
      return { ...state, no_of_employees: action.payload.no_of_employees };
    case actionTypes.VALIDATION_UPDATED:
      return { ...state, isValid: action.payload.isValid };
    case actionTypes.LOADING_INITIATED:
      return { ...state, loading: action.payload.loading };
    case actionTypes.STEP_CHANGED:
      return { ...state, step: action.payload.step };
    case actionTypes.CORPORATE_OTP_SUBMITTED:
      return { ...state };
    case actionTypes.CORPORATE_OTP_ADDED:
      return {
        ...state,
        otp: action.payload.otp,
        isOtpValid: action.payload.otp.length == 6,
      };
    case actionTypes.CORPORATE_OTP_SENT:
      return {
        ...state,
        otpSent: action.payload.otpSent,
        loading: action.payload.loading,
      };

    case actionTypes.ADMIN_NAME_ADDED:
      return { ...state, admin_full_name: action.payload.admin_full_name };
    case actionTypes.ADMIN_EMAIL_ADDED:
      return { ...state, admin_email: action.payload.admin_email };
    case actionTypes.ADMIN_PASSWORD_ADDED:
      return { ...state, password: action.payload.password };
    case actionTypes.ADMIN_CONFIRMATION_PASSWORD_ADDED:
      return {
        ...state,
        confirmation_password: action.payload.confirmation_password,
      };
    case actionTypes.ENABLE_DISPATCH_CHANGED:
      return {
        ...state,
        enable_dispatch: action.payload.enable_dispatch,
      };
    case actionTypes.ADMIN_VALIDATION_UPDATED:
      return { ...state, isAdminValid: action.payload.isAdminValid };
    case actionTypes.CORPORATE_TERMS_CHANGED:
      return { ...state, agreeToTerms: action.payload.agreeToTerms };

    default:
      return state;
  }
}
