import * as actionTypes from "../../types/corporate/requests";
const initialState = {
  query: "",
  requests: [],
  loading: false,
  debit_limit: "",
  max_user_limit: 1,
  reason: "",
  isLoading: false,
  isValid: false,
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

    case actionTypes.DEBIT_LIMIT_ADDED:
      return {
        ...state,
        debit_limit: action.payload.debit_limit,
      };

    case actionTypes.USER_LIMIT_ADDED:
      return {
        ...state,
        max_user_limit: action.payload.max_user_limit,
      };
    case actionTypes.REASON_ADDED:
      return {
        ...state,
        reason: action.payload.reason,
      };

    case actionTypes.FORM_VALIDATED:
      return {
        ...state,
        isValid: action.payload.isValid,
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
