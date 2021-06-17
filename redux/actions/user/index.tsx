import * as actions from "../../types/user";

export const addPhone = ({ phone_no, country, country_code, isValid }) => {
    return {
        type: actions.PHONE_ADDED,
        payload: {
            phone_no: phone_no,
            country_code: country_code,
            country: country,
            isValid: isValid
        }
    }
};

export const submitPhoneNumber = () => {
    return {
        type: actions.PHONE_SUBMITTED,
    }
};
export const submitOtp = () => {
    return {
        type: actions.OTP_SUBMITTED,
    }
};


export const login = ({ otp }) => {
    return {
        type: actions.USER_LOGGED_IN,
        payload: {
            otp: otp
        }
    }
};

export const setLoading = (loading) => {
    return {
        type: actions.LOADING_UPDATED,
        payload: {
            loading: loading
        }
    }
};

export const setKeepMeSignedIn = (keepMeSignedIn) => {
    return {
        type: actions.KEEP_ME_SIGNED_IN_CHANGED,
        payload: {
            keepMeSignedIn: keepMeSignedIn
        }
    }
};

export const changeStep = (step) => {
    return {
        type: actions.STEP_CHANGED,
        payload: {
            step: step
        }
    }
};

export const changeOtpStatus = ({ loading, otpSent }) => {
    return {
        type: actions.OTP_SENT,
        payload: {
            otpSent: otpSent,
            loading: loading
        }
    }
};

export const changeOtp = (otp) => {
    return {
        type: actions.OTP_ADDED,
        payload: {
            otp: otp
        }

    }
};

export const resendOtp = () => {
    return {
        type: actions.OTP_RESENT,
    }
};

export const reset = () => {
    return {
        type: actions.RESET,
    }
};


export const addFirstName = (firstName) => {
    return {
        type: actions.FIRST_NAME_ADDED,
        payload: {
            firstName: firstName
        }
    }
};

export const addLastName = (lastName) => {
    return {
        type: actions.LAST_NAME_ADDED,
        payload: {
            lastName: lastName
        }
    }
};

export const addEmail = (email) => {
    return {
        type: actions.EMAIL_ADDED,
        payload: {
            email: email
        }
    }
};


export const setUserIsValid = (isUserValid) => {
    return {
        type: actions.USERISVALIDATED,
        payload:{
            isUserValid:isUserValid
        }
    }
};

export const setTermsAgreement = (agreeToTerms) => {
    return {
        type: actions.TERMS_CHANGED,
        payload:{
            agreeToTerms:agreeToTerms
        }
    }
};


