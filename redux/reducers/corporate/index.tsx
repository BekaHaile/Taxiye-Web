import * as actionTypes from "../../types/corporate";
const initialState = {
    company_name: "",
    company_email: "",
    phone_no: "",
    country_code: "+251",
    country: "",
    isPhoneValid: false,
    isValid: false,
    no_of_employees: 1,
    loading: false,
    step: 1,
    otpSent: false,
    otp: "",
    isOtpValid: false,
}

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
                isPhoneValid: action.payload.isPhoneValid
            };
        case actionTypes.NUMBER_OF_EMPLOYEES_ADDED:
            return { ...state, no_of_employees: action.payload.no_of_employees };
        case actionTypes.VALIDATION_UPDATED:
            return { ...state, isValid: action.payload.isValid }
        case actionTypes.LOADING_INITIATED:
            return { ...state, loading: action.payload.loading }
        case actionTypes.STEP_CHANGED:
            return { ...state, step: action.payload.step }
        case actionTypes.CORPORATE_OTP_SUBMITTED:
            return { ...state };
        case actionTypes.CORPORATE_OTP_ADDED:
            return { ...state, otp: action.payload.otp, isOtpValid: action.payload.otp.length == 6 };
        case actionTypes.CORPORATE_OTP_SENT:
            return { ...state, otpSent: action.payload.otpSent, loading: action.payload.loading };
        default:
            return state;
    }
}