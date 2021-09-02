import * as actions from "../../actions/corporate/requests";
import * as actiontypes from "../../types/corporate/requests";
import axios from "axios";
import { showError, showSuccess } from "../common";

export const corporate_requests = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_requests;
  let corporate_data = store.getState().corporate;
  if (action.type == actiontypes.FETCH_REQUESTS_INITIATED) {
    next(actions.setLoading(true));
    var requests = await fetchRequests(data["query"], corporate_data);
    next(actions.setRequestsData(requests));
  } else if (
    action.type == actiontypes.DEBIT_LIMIT_ADDED ||
    action.type == actiontypes.USER_LIMIT_ADDED ||
    action.type == actiontypes.REASON_ADDED
  ) {
    var isValid = validateForm(data);
    next(actions.setValidation(isValid));
  } else if (action.type == actiontypes.INITIATE_FORM_SUBMISSION) {
    next(actions.setLoading(true));
    await createRequest(data, corporate_data, next);
    next(actions.finishRequestSubmission());
    var requests = await fetchRequests(data["query"], corporate_data);
    next(actions.setRequestsData(requests));
    next(actions.setLoading(false));
  }else if (action.type == actiontypes.CANCEL_REQUEST_INITIATED) {
    next(actions.setLoading(true));
    await cancelRequest(data, corporate_data, next);
    var requests = await fetchRequests(data["query"], corporate_data);
    next(actions.setRequestsData(requests));
    next(actions.setLoading(false));
  }
};

export async function fetchRequests(query, corporate_data) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/limit_update/view_logs`,
      {
        params: {
          token: `${corporate_data["corporate_detail"]["token"]}`,
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

export async function createRequest(data, corporate_data, next) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/limit_update/request`,
      {
        token: `${corporate_data["corporate_detail"]["token"]}`,
        debt_limit: parseInt(data["debit_limit"]),
        max_user_limit: parseInt(data["max_user_limit"]),
        // reason: data["reason"],
      },
      {
        timeout: 10000,
      }
    );
    showSuccess(next);

    return res.data.data;
  } catch (e) {
    console.log(e);
    showError(next);
    return [];
  }
}

export async function cancelRequest(data, corporate_data, next) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/limit_update/cancel`,
      {
        token: `${corporate_data["corporate_detail"]["token"]}`,
        request_id: parseInt(data["request_id"]),
      },
      {
        timeout: 10000,
      }
    );
    showSuccess(next);
    return res.data.data;
  } catch (e) {
    console.log(e);
    showError(next);
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
