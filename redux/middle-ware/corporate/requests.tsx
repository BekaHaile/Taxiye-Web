import * as actions from "../../actions/corporate/requests";
import * as actionTypes from "../../types/corporate/requests";
import * as requestApi from "../../../services/api/corporate/request/index.api";
import fetchRequestsDto from "../../../models/corporate/request/fetchRequestsDto";
import addRequestDto from "../../../models/corporate/request/addRequestDto";
import cancelRequestDto from "../../../models/corporate/request/cancelRequestDto";

export const corporate_requests = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_requests;
  let corporate_data = store.getState().corporate;
  if (action.type == actionTypes.FETCH_REQUESTS_INITIATED) {
    next(actions.setLoading(true));
    var requests = await requestApi.fetchRequests(
      fetchRequestsDto(corporate_data)
    );
    next(actions.setRequestsData(requests));
  } else if (
    action.type == actionTypes.DEBIT_LIMIT_ADDED ||
    action.type == actionTypes.USER_LIMIT_ADDED ||
    action.type == actionTypes.REASON_ADDED
  ) {
    var isValid = validateForm(data);
    next(actions.setValidation(isValid));
  } else if (action.type == actionTypes.INITIATE_FORM_SUBMISSION) {
    next(actions.setLoading(true));
    await requestApi.createRequest(addRequestDto(data, corporate_data));
    next(actions.finishRequestSubmission());
    var requests = await requestApi.fetchRequests(
      fetchRequestsDto(corporate_data)
    );
    next(actions.setRequestsData(requests));
    next(actions.setLoading(false));
  } else if (action.type == actionTypes.CANCEL_REQUEST_INITIATED) {
    next(actions.setLoading(true));
    await requestApi.cancelRequest(cancelRequestDto(data, corporate_data));
    var requests = await requestApi.fetchRequests(
      fetchRequestsDto(corporate_data)
    );
    next(actions.setRequestsData(requests));
    next(actions.setLoading(false));
  }
};

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
