import * as actionTypes from "../../types/contact-us";
let date = new Date();
const initialState = {
  full_name: "",
  email: "",
  subject: "",
  message: "",
  isValid: false,
  loading: false,
};

export default function contactUs(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FULL_NAME_ADDED:
      return { ...state, full_name: action.payload.full_name };
    case actionTypes.EMAIL_ADDED:
      return { ...state, email: action.payload.email };
    case actionTypes.SUBJECT_ADDED:
      return { ...state, subject: action.payload.subject };
    case actionTypes.MESSAGE_ADDED:
      return { ...state, message: action.payload.message };
    case actionTypes.INPUT_VERIFICATION:
      return { ...state, isValid: action.payload.isValid };
    case actionTypes.CHANGE_LOADING:
      return { ...state, loading: action.payload.loading };

    case actionTypes.RESET_CONTACT_US:
      return {
        ...state,
        full_name: "",
        email: "",
        subject: "",
        message: "",
        isValid: false,
        loading: false,
      };

    default:
      return state;
  }
}
