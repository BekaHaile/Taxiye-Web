import * as actions from "../../actions/corporate/account";
import * as actiontypes from "../../types/corporate/account";
import * as validationUtils from "../../../utils/validation";
import * as parserUtils from "../../../utils/parser";
import axios from "axios";

import { showError } from "../common";

export const corporate_account = (store) => (next) => async (action) => {
  if (action.type == actiontypes.PHONE_NUMBER_BEFORE_VALIDATION_ADDED) {
    var parsedPhone = parserUtils.parsePhoneNumber(action.payload.phone_no);
    next(actions.changePhone(parsedPhone));
    return;
  }
  next(action);
  let data = store.getState().corporate_account;

  if (
    action.type == actiontypes.FULL_NAME_ADDED ||
    action.type == actiontypes.EMAIL_ADDED ||
    action.type == actiontypes.PHONE_NUMBER_ADDED
  ) {
    var isValid = validateUserData(data["user"]);
    next(actions.setValidation(isValid));
  } else if (
    action.type == actiontypes.COMPANY_NAME_ADDED ||
    action.type == actiontypes.DEBIT_LIMIT_ADDED ||
    action.type == actiontypes.ADDRESS_ADDED ||
    action.type == actiontypes.MAX_USER_ADDED ||
    action.type == actiontypes.OFFICIAL_EMAIL_ADDED ||
    action.type == actiontypes.VAT_NUMBER_ADDED ||
    action.type == actiontypes.COMPANY_INVOICE_EMAIL_ADDED ||
    action.type == actiontypes.COMPANY_PHONE_NUMBER_ADDED
  ) {
    var isValid = validateCompanyData(data["company"]);
    next(actions.setComapanyValidation(isValid));
  } else if (action.type == actiontypes.ROLES_TAB_INITIATED) {
    next(actions.setRolesLoading(true));
    await sleep(3000);
    var users = setUsers(data["q"]);
    next(actions.setRolesData(users));
    next(actions.setRolesLoading(false));
  } else if (
    action.type == actiontypes.NEW_FULL_NAME_ADDED ||
    action.type == actiontypes.NEW_EMAIL_ADDED ||
    action.type == actiontypes.NEW_ROLE_SELECTED
  ) {
    let isValid = validateRolesData(data["roles"]["user"]);
    next(actions.setFormValidation(isValid));
  } else if (action.type == actiontypes.SAVE_NEW_FORM_INITIATED) {
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
    validationUtils.validateEmail(data["email"]) &&
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
    validationUtils.validateEmail(data["official_email"]) &&
    data["full_name"] != "" &&
    data["vat_number"] != "" &&
    data["invoice_email"] != "" &&
    validationUtils.validateEmail(data["invoice_email"]) &&
    data["phone_no"] != null &&
    data["country_code"] != null &&
    data["country"] != null &&
    data["isPhoneValid"]
  );
}

function validateRolesData(data) {
  return (
    data["full_name"] != "" &&
    data["email"] != "" &&
    validationUtils.validateEmail(data["email"]) &&
    data["role"] != ""
  );
}

function setUsers(query) {
  const data = [];
  var ran = Math.floor(Math.random() * 4) + 1;
  for (let i = 0; i < ran; i++) {
    data.push({
      key: i,
      profile: {
        name: `Edward King`,
        image: `https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png`,
      },
      email: "email@email.com",
      role: i == 0 ? "Adminstrator" : i == 1 ? "Moderator" : "Dispatcher",
    });
  }
  return data;
}
