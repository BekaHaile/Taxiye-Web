import * as actions from "../../actions/contact-us";
import * as validationUtils from "../../../utils/validation";
import { showSuccess, showError } from "../common";
import axios from "axios";

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
    submitForm(next, data);
  }
};

function validatInput(data) {
  return (
    data["full_name"] != null &&
    data["full_name"] != "" &&
    data["email"] != null &&
    data["email"] != "" &&
    validationUtils.validateEmail(data["email"]) &&
    data["subject"] != null &&
    data["subject"] != "" &&
    data["message"] != null &&
    data["message"] != ""
  );
}

async function submitForm(next, data) {
  try {
    const { NEXT_PUBLIC_API_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_API_HOST}/api/support`,
      {
        full_name: `${data["full_name"]}`,
        email: `${data["email"]}`,
        subject: `${data["subject"]}`,
        message: `${data["message"]}`,
      },
      { timeout: 10000 }
    );

    showSuccess(next);
    next(actions.reset());
    return res.data;
  } catch (e) {
    showError(next);
  }
}
