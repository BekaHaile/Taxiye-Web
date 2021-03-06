import * as actionTypes from "../../types/user";
const ISSERVER = typeof window === "undefined";
/*
// The state of user data is declared here
// It will be usable based on the action fired
// State will be changed based on the actions specified
// 
*/
const initialState = {
  phone_no: "",
  country_code: "+251",
  country: "",
  isValid: false, // A flag that changes after inputs are validated
  loading: false, // A loading status checker on event calls
  otpSent: false,
  keepMeSignedIn: false,
  step: 1,
  otp: "",
  isOtpValid: false,
  agreeToTerms: false,
  userData: null,
  device_token: "",
  access_token: !ISSERVER ? localStorage.getItem("access_token") ?? "" : null,
  isUserValid: false,
  user_data: !ISSERVER ? JSON.parse(localStorage.getItem("user_data")) : null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    gender: "Male",
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FIRST_NAME_ADDED:
      return {
        ...state,
        user: { ...state.user, firstName: action.payload.firstName },
      };
    case actionTypes.LAST_NAME_ADDED:
      return {
        ...state,
        user: { ...state.user, lastName: action.payload.lastName },
      };
    case actionTypes.GENDER_CHANGED:
      return {
        ...state,
        user: { ...state.user, gender: action.payload.gender },
      };
    case actionTypes.EMAIL_ADDED:
      return { ...state, user: { ...state.user, email: action.payload.email } };
    case actionTypes.PHONE_ADDED:
      return {
        ...state,
        phone_no: action.payload.phone_no,
        country_code: action.payload.country_code,
        country: action.payload.country,
        isValid: action.payload.isValid,
      };
    case actionTypes.PHONE_SUBMITTED:
      return { ...state };
    case actionTypes.OTP_SUBMITTED:
      return { ...state };
    case actionTypes.OTP_ADDED:
      return {
        ...state,
        otp: action.payload.otp,
        isOtpValid: action.payload.otp.length == 4,
      };
    case actionTypes.LOADING_UPDATED:
      return { ...state, loading: action.payload.loading };
    case actionTypes.KEEP_ME_SIGNED_IN_CHANGED:
      return { ...state, keepMeSignedIn: action.payload.keepMeSignedIn };
    case actionTypes.STEP_CHANGED:
      return { ...state, step: action.payload.step };
    case actionTypes.OTP_SENT:
      return {
        ...state,
        otpSent: action.payload.otpSent,
        loading: action.payload.loading,
      };
    case actionTypes.USERISVALIDATED:
      return { ...state, isUserValid: action.payload.isUserValid };
    case actionTypes.TERMS_CHANGED:
      return { ...state, agreeToTerms: action.payload.agreeToTerms };

    case actionTypes.USER_LOG_IN_VERIFIED:
      return { ...state, user_data: action.payload.user_data };

    case actionTypes.DEVICE_TOKEN_ADDED:
      return { ...state, device_token: action.payload.device_token };
    case actionTypes.ACCESS_TOKEN_GENERATED:
      return { ...state, access_token: action.payload.access_token };

    case actionTypes.USER_LOGGED_OUT:
      return { ...state, user_data: null, access_token:"" };

    case actionTypes.RESET:
      return { initialState };

    default:
      return state;
  }
}
