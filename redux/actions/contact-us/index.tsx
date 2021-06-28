import * as actions from "../../types/contact-us";

export const addFullName = (full_name) => {
  return {
    type: actions.FULL_NAME_ADDED,
    payload: {
      full_name: full_name,
    },
  };
};

export const addEmail = (email) => {
  return {
    type: actions.EMAIL_ADDED,
    payload: {
      email: email,
    },
  };
};

export const addSubject = (subject) => {
  return {
    type: actions.SUBJECT_ADDED,
    payload: {
      subject: subject,
    },
  };
};

export const addMessage = (message) => {
  return {
    type: actions.MESSAGE_ADDED,
    payload: {
      message: message,
    },
  };
};

export const setValidation = (isValid) => {
  return {
    type: actions.INPUT_VERIFICATION,
    payload: {
      isValid: isValid,
    },
  };
};

export const submitForm = () => {
  return {
    type: actions.FORM_SUBMITTED,
  };
};

export const reset = () => {
  return {
    type: actions.RESET_CONTACT_US,
  };
};
