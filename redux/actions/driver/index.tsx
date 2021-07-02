import * as actions from "../../types/driver";

export const addFullName = (full_name) => {
  return {
    type: actions.DRIVER_FULLNAME_ADDED,
    payload: {
      full_name: full_name,
    },
  };
};

export const genderSelected = (gender) => {
  return {
    type: actions.DRIVER_GENDER_ADDED,
    payload: {
      gender: gender,
    },
  };
};

export const countrySelected = (country) => {
  return {
    type: actions.DRIVER_COUNTRY_ADDED,
    payload: {
      country: country,
    },
  };
};

export const addPhone = ({ phone_no, country, country_code, isValid }) => {
  return {
    type: actions.PHONE_ADDED,
    payload: {
      phone_no: phone_no,
      country_code: country_code,
      country: country,
      isPhoneValid: isValid,
    },
  };
};

export const changeTerm = (agreeToTerms) => {
  return {
    type: actions.TERMS_CHANGED,
    payload: {
      agreeToTerms: agreeToTerms,
    },
  };
};

export const validateFirstForm = (isFirstFormValid) => {
  return {
    type: actions.FIRST_FORM_VALIDATED,
    payload: {
      isFirstFormValid: isFirstFormValid,
    },
  };
};

export const changeOtpStatus = ({ loading, otpSent }) => {
  return {
    type: actions.OTP_SENT,
    payload: {
      otpSent: otpSent,
      loading: loading,
    },
  };
};

export const changeOtp = (otp) => {
  return {
    type: actions.OTP_ADDED,
    payload: {
      otp: otp,
    },
  };
};

export const resendOtp = () => {
  return {
    type: actions.OTP_RESENT,
  };
};

export const submitOtp = () => {
  return {
    type: actions.OTP_SUBMITTED,
  };
};

export const setLoading = (loading) => {
  return {
    type: actions.LOADING_UPDATED,
    payload: {
      loading: loading,
    },
  };
};

export const changeVehicle = (vehicleType) => {
  return {
    type: actions.VEHICLE_CHANGED,
    payload: {
      vehicleType: vehicleType,
    },
  };
};

export const submitDriverForm = () => {
  return {
    type: actions.INITIATE_SUBMIT_DRIVER_FORM,
  };
};

export const driverFormSubmitted = (status) => {
  return {
    type: actions.DRIVER_FORM_SUBMITTED,
    payload: {
      status: status,
    },
  };
};

export const changeStep = (step) => {
  return {
    type: actions.STEP_CHANGED,
    payload: {
      step: step,
    },
  };
};
