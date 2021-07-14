import * as actionTypes from "../../types/corporate/rides";
const initialState = {
  rides: [],
  loading: [],
  query: "",
  date: null,
  city: "",
  type: "",
};

export default function corporateRidesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_RIDES_INITIATED:
      return {
        ...state,
        rides: [],
      };
    case actionTypes.DATE_CHANGED:
      return {
        ...state,
        date: action.payload.date,
      };

    case actionTypes.CITY_CHANGED:
      return {
        ...state,
        city: action.payload.city,
      };
    case actionTypes.TYPE_CHANGED:
      return {
        ...state,
        type: action.payload.type,
        rides: [],
      };

    case actionTypes.QUERY_CHANGED:
      return {
        ...state,
        query: action.payload.query,
      };
    case actionTypes.LOADING_INITIATED:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case actionTypes.RIDES_FETCHED:
      return {
        ...state,
        rides: action.payload.rides,
        loading: false,
      };
    case actionTypes.RESET:
      return {
        ...state,
        rides: [],
        loading: [],
        query: "",
        date: null,
        city: "",
      };

    default:
      return state;
  }
}
