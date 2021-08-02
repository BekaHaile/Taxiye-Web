import * as actions from "../../types/corporate";

export const addCompanyName = (company_name) => {
  return {
    type: actions.COMPANY_NAME_ADDED,
    payload: {
      company_name: company_name,
    },
  };
};
export const addCompanyEmail = (company_email) => {
  return {
    type: actions.COMPANY_OFFICIAL_EMAIL_ADDED,
    payload: {
      company_email: company_email,
    },
  };
};
export const addPhone = ({ phone_no, country, country_code, isPhoneValid }) => {
  return {
    type: actions.COMPANY_PHONE_NUMBER_ADDED,
    payload: {
      phone_no: phone_no,
      country_code: country_code,
      country: country,
      isPhoneValid: isPhoneValid,
    },
  };
};

export const addCompanyEmployeesNumber = (no_of_employees) => {
  return {
    type: actions.NUMBER_OF_EMPLOYEES_ADDED,
    payload: {
      no_of_employees: no_of_employees,
    },
  };
};

export const setValidation = (isValid) => {
  return {
    type: actions.VALIDATION_UPDATED,
    payload: {
      isValid: isValid,
    },
  };
};

export const initiateLoading = (loading) => {
  return {
    type: actions.LOADING_INITIATED,
    payload: {
      loading: loading,
    },
  };
};

export const initiateSubmitCompanyData = () => {
  return {
    type: actions.COMPANY_DATA_SUBMIT_INITIATED,
  };
};

export const goToStep = (step) => {
  return {
    type: actions.STEP_CHANGED,
    payload: {
      step: step,
    },
  };
};

export const changeOtpStatus = ({ loading, otpSent }) => {
  return {
    type: actions.CORPORATE_OTP_SENT,
    payload: {
      otpSent: otpSent,
      loading: loading,
    },
  };
};

export const changeOtp = (otp) => {
  return {
    type: actions.CORPORATE_OTP_ADDED,
    payload: {
      otp: otp,
    },
  };
};

export const resendOtp = () => {
  return {
    type: actions.CORPORATE_OTP_RESENT,
  };
};

export const submitOtp = () => {
  return {
    type: actions.CORPORATE_OTP_SUBMITTED,
  };
};

export const addFullName = (admin_full_name) => {
  return {
    type: actions.ADMIN_NAME_ADDED,
    payload: {
      admin_full_name: admin_full_name,
    },
  };
};
export const addAdminEmail = (admin_email) => {
  return {
    type: actions.ADMIN_EMAIL_ADDED,
    payload: {
      admin_email: admin_email,
    },
  };
};

export const addPassword = (password) => {
  return {
    type: actions.ADMIN_PASSWORD_ADDED,
    payload: {
      password: password,
    },
  };
};
export const setEnableDispatch = (enable_dispatch) => {
  return {
    type: actions.ENABLE_DISPATCH_CHANGED,
    payload: {
      enable_dispatch: enable_dispatch,
    },
  };
};

export const addConfirmationPassword = (confirmation_password) => {
  return {
    type: actions.ADMIN_CONFIRMATION_PASSWORD_ADDED,
    payload: {
      confirmation_password: confirmation_password,
    },
  };
};

export const setAdminValidation = (isAdminValid) => {
  return {
    type: actions.ADMIN_VALIDATION_UPDATED,
    payload: {
      isAdminValid: isAdminValid,
    },
  };
};

export const initiateSubmitAdminData = () => {
  return {
    type: actions.ADMIN_DATA_SUBMIT_INITIATED,
  };
};
export const setTermsAgreement = (agreeToTerms) => {
  return {
    type: actions.CORPORATE_TERMS_CHANGED,
    payload: {
      agreeToTerms: agreeToTerms,
    },
  };
};

export const login = () => {
  return {
    type: actions.INITIATED_LOGIN_TO_CORPORATE,
  };
};

export const addLoginEmail = (login_email) => {
  return {
    type: actions.ADDED_LOGIN_EMAIL,
    payload: {
      login_email: login_email,
    },
  };
};

export const addLoginPassword = (login_password) => {
  return {
    type: actions.ADDED_LOGIN_PASSWORD,
    payload: {
      login_password: login_password,
    },
  };
};

export const changeLoginValidation = (canLogin) => {
  return {
    type: actions.CORPORATE_LOGIN_VALIDATED,
    payload: {
      canLogin: canLogin,
    },
  };
};

export const setKeepMeSignedIn = (keepMeSignedIn) => {
  return {
    type: actions.KEEP_ME_SIGN_IN_CHANGED,
    payload: {
      keepMeSignedIn: keepMeSignedIn,
    },
  };
};

export const setLogin = (corporate_detail, company_detail) => {
  return {
    type: actions.LOGGED_IN,
    payload: {
      corporate_detail: corporate_detail,
      company_detail: company_detail
    },
  };
};

export const initiateLogout = () => {
  return {
    type: actions.LOG_OUT_INITIATED,
  };
};

export const logout = () => {
  return {
    type: actions.LOGGED_OUT,
  };
};

