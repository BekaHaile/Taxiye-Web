import * as actions from "../../types/corporate/requests";

export const changeQuery = (query) => {
  return {
    type: actions.REQUESTS_QUERY_ADDED,
    payload: {
      query: query,
    },
  };
};

export const fetchRequests = () => {
  return {
    type: actions.FETCH_REQUESTS_INITIATED,
  };
};

export const setRequestsData = (requests) => {
  return {
    type: actions.REQUESTS_DATA_FETCHED,
    payload: {
      requests: requests,
    },
  };
};

export const setDebitLimit = (debit_limit) => {
  return {
    type: actions.DEBIT_LIMIT_ADDED,
    payload: {
      debit_limit: debit_limit,
    },
  };
};

export const setMaximumUser = (max_user_limit) => {
  return {
    type: actions.USER_LIMIT_ADDED,
    payload: {
      max_user_limit: max_user_limit,
    },
  };
};

export const setAReason = (reason) => {
  return {
    type: actions.REASON_ADDED,
    payload: {
      reason: reason,
    },
  };
};

export const setValidation = (isValid) => {
  return {
    type: actions.FORM_VALIDATED,
    payload: {
      isValid: isValid,
    },
  };
};

export const setLoading = (loading) => {
  return {
    type: actions.LOADING_INITIATED,
    payload: {
      loading: loading,
    },
  };
};

export const initiateRequestSaving = () => {
  return {
    type: actions.INITIATE_FORM_SUBMISSION,
  };
};

export const initiateCancelRequest = (request_id) => {
  return {
    type: actions.CANCEL_REQUEST_INITIATED,
    payload: {
      request_id: request_id,
    },
  };
};

export const initiateDeleteRequest = () => {
  return {
    type: actions.INITIATE_FORM_SUBMISSION,
  };
};

export const finishRequestSubmission = () => {
  return {
    type: actions.FORM_DATA_SUBMITTED,
    payload: {},
  };
};
