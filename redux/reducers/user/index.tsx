import * as actionsTypes from "../../types/user";
const initialState = {
    phone_no: "",
    country_code: "+251",
    country: "",
    isValid: false,
    loading: false,
    otpSent: false,
    keepMeSignedIn: false,
    step: 1,
    otp: "",
    isOtpValid: false,
    agreeToTerms: false,
    userData: null,
    isUserValid: false,
    user: {
        firstName: "",
        lastName: "",
        email: "",
        gender: "Male",
    }

}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.FIRST_NAME_ADDED:
            return { ...state, user: { ...state.user, firstName: action.payload.firstName } };
        case actionsTypes.LAST_NAME_ADDED:
            return { ...state, user: { ...state.user, lastName: action.payload.lastName } };
        case actionsTypes.EMAIL_ADDED:
            return { ...state, user: { ...state.user, email: action.payload.email } };
        case actionsTypes.PHONE_ADDED:
            return {
                ...state,
                phone_no: action.payload.phone_no,
                country_code: action.payload.country_code,
                country: action.payload.country,
                isValid: action.payload.isValid
            };
        case actionsTypes.PHONE_SUBMITTED:
            return { ...state };
        case actionsTypes.OTP_SUBMITTED:
            return { ...state };
        case actionsTypes.OTP_ADDED:
            return { ...state, otp: action.payload.otp, isOtpValid: action.payload.otp.length == 6 };
        case actionsTypes.LOADING_UPDATED:
            return { ...state, loading: action.payload.loading };
        case actionsTypes.KEEP_ME_SIGNED_IN_CHANGED:
            return { ...state, keepMeSignedIn: action.payload.keepMeSignedIn };
        case actionsTypes.STEP_CHANGED:
            return { ...state, step: action.payload.step };
        case actionsTypes.OTP_SENT:
            return { ...state, otpSent: action.payload.otpSent, loading: action.payload.loading };
        case actionsTypes.USERISVALIDATED:
            return { ...state, isUserValid: action.payload.isUserValid };
        case actionsTypes.TERMS_CHANGED:
            return { ...state, agreeToTerms: action.payload.agreeToTerms };
        case actionsTypes.RESET:
            return { initialState };

        default:
            return state;
    }
}