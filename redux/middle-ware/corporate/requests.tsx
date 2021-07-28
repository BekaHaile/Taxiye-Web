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
    var requests = await fetchGroups(data["query"]);
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

export async function fetchGroups(query) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/limit_update/view_logs`,
      {
        params: {
          token: `${process.env.NEXT_PUBLIC_CORPORATE_TOKEN}`,
        },
        timeout: 10000,
      }
    );
    return res.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
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
