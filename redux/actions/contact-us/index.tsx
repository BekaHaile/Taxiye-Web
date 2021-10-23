import * as actions from "../../types/contact-us";

/**
// The function is called when full name field is
// Changed, whenever it is called it takes full_name
// As an argument and pass that argument to reducer
// as a payload so that the reducer will be able to
// Update accordingly.
*/
export const addFullName = (full_name) => {
  return {
    type: actions.FULL_NAME_ADDED,
    payload: {
      full_name: full_name,
    },
  };
};

/**
// The function is called when email field is
// Changed, whenever it is called it takes email value
// As an argument and pass that argument to reducer
// as a payload so that the reducer will be able to
// Update accordingly.
*/

export const addEmail = (email) => {
  return {
    type: actions.EMAIL_ADDED,
    payload: {
      email: email,
    },
  };
};

/**
// The function is called when subject field is
// Changed, whenever it is called it takes subject value
// As an argument and pass that argument to reducer
// as a payload so that the reducer will be able to
// Update accordingly.
*/

export const addSubject = (subject) => {
  return {
    type: actions.SUBJECT_ADDED,
    payload: {
      subject: subject,
    },
  };
};

/**
// The function is called when message field is
// Changed, whenever it is called it takes message value
// As an argument and pass that argument to reducer
// as a payload so that the reducer will be able to
// Update accordingly.
*/

export const addMessage = (message) => {
  return {
    type: actions.MESSAGE_ADDED,
    payload: {
      message: message,
    },
  };
};

/**
// This function is responsible to change validation status
// Will be called from the middleware
// If fields specified abover meet the requirement
// Status will be valid and state will be changed to true
*/

export const setValidation = (isValid) => {
  return {
    type: actions.INPUT_VERIFICATION,
    payload: {
      isValid: isValid,
    },
  };
};

/**
// This function is called when input is verified
// And The user clicks on submit button
// It only fires an action that will be consumed by
// The middleware and fire other actions based on api call 
// Responses.
*/

export const submitForm = () => {
  return {
    type: actions.FORM_SUBMITTED,
  };
};

/**
// Resets current state to initial state
*/

export const reset = () => {
  return {
    type: actions.RESET_CONTACT_US,
  };
};


export const changeLoading = (loading) => {
  return {
    type: actions.CHANGE_LOADING,
    payload: {
      loading: loading,
    },
  };
};
