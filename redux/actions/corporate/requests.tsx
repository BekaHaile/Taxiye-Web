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

export const setLoading = (loading) => {
  return {
    type: actions.LOADING_INITIATED,
    payload: {
      loading: loading,
    },
  };
};
