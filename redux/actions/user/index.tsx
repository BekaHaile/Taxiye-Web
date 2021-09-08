import * as actions from "../../types/user";
/*
// This function is responsible to fire add phone action
// The action will emit phone_no, country_code, country and phone
// Validation status changes so that the reducer will consume
// The changes and change the states
*/
export const addPhone = ({ phone_no, country, country_code, isValid }) => {
  return {
    type: actions.PHONE_ADDED,
    payload: {
      phone_no: phone_no,
      country_code: country_code,
      country: country,
      isValid: isValid,
    },
  };
};

/*
// This function is called whenever user click on submit button
// after phone input field is validated
// This functions does not change any state with payload directly
// But it will be consumed by the middleware and act us 
// Pipe line to make api calls
// Then the middleware will fire a new action based on the response
*/

export const submitPhoneNumber = () => {
  return {
    type: actions.PHONE_SUBMITTED,
  };
};

/*
// This function is called to submit otp and make api call
// To verify with the phone number
*/

export const submitOtp = () => {
  return {
    type: actions.OTP_SUBMITTED,
  };
};

/*
// This function is called on login with otp
*/

export const login = ({ otp }) => {
  return {
    type: actions.USER_LOGGED_IN,
    payload: {
      otp: otp,
    },
  };
};

export const loginVerified = (user_data) => {
  return {
    type: actions.USER_LOG_IN_VERIFIED,
    payload: {
      user_data: user_data,
    },
  };
};

export const logoutUser = () => {
  return {
    type: actions.USER_LOGGED_OUT,
  };
};

/*
// The purpose below is to change loading state,
// Note the fact that we only push the payload
// So that it will be picked by the reducer to change the state
*/

export const setLoading = (loading) => {
  return {
    type: actions.LOADING_UPDATED,
    payload: {
      loading: loading,
    },
  };
};

/*
// Called whenever the user selects an option to be able to
// Login again whenever it comes back
// Only change the flag
*/

export const setKeepMeSignedIn = (keepMeSignedIn) => {
  return {
    type: actions.KEEP_ME_SIGNED_IN_CHANGED,
    payload: {
      keepMeSignedIn: keepMeSignedIn,
    },
  };
};
/*
// Here we have a function that fires an action
// With a payload of changed step
// For steppers, 
*/

export const changeStep = (step) => {
  return {
    type: actions.STEP_CHANGED,
    payload: {
      step: step,
    },
  };
};

/*
// Here the function is used to change the status of otp
// It takes two arguments and fires those as a payload
// This arguments are the loading status that was fired with
// Set loading function and otp status
*/

export const changeOtpStatus = ({ loading, otpSent }) => {
  return {
    type: actions.OTP_SENT,
    payload: {
      otpSent: otpSent,
      loading: loading,
    },
  };
};

/*
// This function is called whenever there is event on otp input field
// It takes otp value and fire an action with otp payload
// Reducer will be responsible to manage the change 
*/
export const changeOtp = (otp) => {
  return {
    type: actions.OTP_ADDED,
    payload: {
      otp: otp,
    },
  };
};

/*
// This function is called when use selects or clicks resend option
// This functions job is to fire an action that the middleware is aware of
// And take the action and make an api call
// After the api call the middleware will fire other actions
*/

export const resendOtp = () => {
  return {
    type: actions.OTP_RESENT,
  };
};

/*
// This function is used to reset the current state to
// Primitive or initial state in the reducer
*/

export const reset = () => {
  return {
    type: actions.RESET,
  };
};

/*
// Here the function is responsible to initiate
// An action to change first name value
// It takes first name as an argument
// And passes that as a payload
*/

export const addFirstName = (firstName) => {
  return {
    type: actions.FIRST_NAME_ADDED,
    payload: {
      firstName: firstName,
    },
  };
};

/*
// Will be called on gender change
// Takes selected gender as an argument
// Initiates gender change action
*/

export const changeGender = (gender) => {
  return {
    type: actions.GENDER_CHANGED,
    payload: {
      gender: gender,
    },
  };
};

/*
// Here the function is responsible to initiate
// An action to change last name value
// It takes last name as an argument
// And passes that as a payload
*/

export const addLastName = (lastName) => {
  return {
    type: actions.LAST_NAME_ADDED,
    payload: {
      lastName: lastName,
    },
  };
};

/*
// Here the function is responsible to initiate
// Email change action, and pass email value
// To the reducer to be used
*/

export const addEmail = (email) => {
  return {
    type: actions.EMAIL_ADDED,
    payload: {
      email: email,
    },
  };
};

/*
// This function is fired from the middleware
// On user data change, and it checks for data
// validation, like checking if email is valid, 
// Name is not empty...
*/

export const setUserIsValid = (isUserValid) => {
  return {
    type: actions.USERISVALIDATED,
    payload: {
      isUserValid: isUserValid,
    },
  };
};

/*
// Here the function is called on terms checkbox is changed
// It initiates terms changed action
// Passes checked status as a payload
*/

export const setTermsAgreement = (agreeToTerms) => {
  return {
    type: actions.TERMS_CHANGED,
    payload: {
      agreeToTerms: agreeToTerms,
    },
  };
};

export const setDeviceToken = (device_token) => {
  return {
    type: actions.DEVICE_TOKEN_ADDED,
    payload: {
      device_token: device_token,
    },
  };
};

export const setAccessToken = (access_token) => {
  return {
    type: actions.ACCESS_TOKEN_GENERATED,
    payload: {
      access_token: access_token,
    },
  };
};
