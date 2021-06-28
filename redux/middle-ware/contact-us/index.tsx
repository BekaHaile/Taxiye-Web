import * as actions from "../../actions/contact-us";
import { showSuccess, showError, validateEmail } from "../common";

export const contact_us = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().contact_us;
  if (
    action.type == "FULL_NAME_ADDED" ||
    action.type == "EMAIL_ADDED" ||
    action.type == "SUBJECT_ADDED" ||
    action.type == "MESSAGE_ADDED"
  ) {
    var status = validatInput(data);
    next(actions.setValidation(status));
  } else if (action.type == "FORM_SUBMITTED") {
    submitForm(next);
    
  }
};

function validatInput(data) {
  return (
    data["full_name"] != null &&
    data["full_name"] != "" &&
    data["email"] != null &&
    data["email"] != "" &&
    validateEmail(data["email"]) &&
    data["subject"] != null &&
    data["subject"] != "" &&
    data["message"] != null &&
    data["message"] != ""
  );
}

function submitForm(next) {
  try {
    // let res = await fetchVehicles(data["origin"].location);
    showSuccess(next);
    next(actions.reset());
  } catch (e) {
    showError(next);
  }
}
