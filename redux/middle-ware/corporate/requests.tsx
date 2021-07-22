import * as actions from "../../actions/corporate/requests";
import * as actiontypes from "../../types/corporate/requests";
import axios from "axios";
import { showError } from "../common";

export const corporate_requests = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_requests;
  if (action.type == actiontypes.FETCH_REQUESTS_INITIATED) {
    next(actions.setLoading(true));
    await sleep(3000);
    var requests = fetchGroups(data["query"]);
    next(actions.setRequestsData(requests));
  } else if (
    action.type == actiontypes.DEBIT_LIMIT_ADDED ||
    action.type == actiontypes.USER_LIMIT_ADDED ||
    action.type == actiontypes.REASON_ADDED
  ) {
    var isValid = validateForm(data);
    next(actions.setValidation(isValid));
  }
};

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function fetchGroups(query) {
  const data = [];
  var ran = Math.floor(Math.random() * 15);
  for (let i = 0; i < ran; i++) {
    data.push({
      key: i,
      id: `Edward King`,
      reason: "El Auto Employees",
      debit_limit: `782.01 Birr`,
      maximum_user_limit: 554 - i,
      status:
        i % 3 == 0 && i % 2 == 0
          ? `Approved`
          : i % 2 == 0
          ? `Pending`
          : `Cancelled`,
    });
  }
  return data;
}

function validateForm(data) {
  return (
    data["debit_limit"] != "" &&
    data["debit_limit"] != null &&
    data["max_user_limit"] != "" &&
    data["max_user_limit"] != null &&
    data["reason"] != "" &&
    data["reason"] != null
  );
}
