import * as actions from "../../actions/corporate/account";
import * as actiontypes from "../../types/corporate/account";
import axios from "axios";
import { validateEmail, showError } from "../common";

export const corporate_account = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_account;

  if (
    actiontypes.FULL_NAME_ADDED ||
    actiontypes.EMAIL_ADDED ||
    actiontypes.PHONE_NUMBER_ADDED
  ) {
    var isValid = validateUserData(data["user"]);
    next(actions.setValidation(isValid));
  } else if (
    actiontypes.COMPANY_NAME_ADDED ||
    actiontypes.DEBIT_LIMIT_ADDED ||
    actiontypes.ADDRESS_ADDED ||
    actiontypes.MAX_USER_ADDED ||
    actiontypes.OFFICIAL_EMAIL_ADDED ||
    actiontypes.VAT_NUMBER_ADDED ||
    actiontypes.COMPANY_INVOICE_EMAIL_ADDED ||
    actiontypes.COMPANY_PHONE_NUMBER_ADDED
  ) {
    var isValid = validateCompanyData(data["company"]);
    next(actions.setComapanyValidation(isValid));
  }
};

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function validateUserData(data) {
  return (
    data["full_name"] != "" &&
    data["email"] != "" &&
    data["phone_no"] != "" &&
    data["country_code"] != "" &&
    data["country"] != "" &&
    data["full_name"] != null &&
    data["email"] != null &&
    data["phone_no"] != null &&
    data["country_code"] != null &&
    data["country"] != null &&
    data["isPhoneValid"]
  );
}

function validateCompanyData(data) {
    
  return (
    data["name"] != "" &&
    data["debit_limit"] != "" &&
    data["address"] != "" &&
    data["max_user_limit"] != "" &&
    data["official_email"] != "" &&
    data["full_name"] != "" &&
    data["vat_number"] != "" &&
    data["invoice_email"] != "" &&
    data["phone_no"] != null &&
    data["country_code"] != null &&
    data["country"] != null &&
    data["isPhoneValid"]
  );
}
