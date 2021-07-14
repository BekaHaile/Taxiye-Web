import * as actionTypes from "../../types/corporate/requests";
const initialState = {
  query: "",
  requests: [],
  loading: false,
};

export default function corporateRequestsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUESTS_QUERY_ADDED:
      return {
        ...state,
        query: action.payload.query,
      };
    case actionTypes.REQUESTS_DATA_FETCHED:
      return {
        ...state,
        requests: action.payload.requests,
        loading: false,
      };

    case actionTypes.LOADING_INITIATED:
      return {
        ...state,
        loading: action.payload.loading,
      };

    default:
      return state;
  }
}
