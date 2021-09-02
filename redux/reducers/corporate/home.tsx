import * as actionTypes from "../../types/corporate/home";
let date = new Date();
const initialState = {
  overview: null,
  overviewLoading: false,
  recentRides:[],
  recentRidesLoading:false
};

export default function corporateHomeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.COMPANY_OVERVIEW_PULLED_IN:
      return {
        ...state,
        overview: action.payload.overview,
        overviewLoading: false,
      };
    case actionTypes.COMPANY_OVERVIEW_LOADING_CHANGED:
      return {
        ...state,
        overviewLoading: action.payload.loading,
      };

    case actionTypes.RECENT_RIDES_PULLED_IN:
      return {
        ...state,
        recentRides: action.payload.recentRides,
        recentRidesLoading:false
      };
      case actionTypes.RECENT_RIDES_LOADING_CHANGED:
        return {
          ...state,
          recentRidesLoading: action.payload.loading,
        };

    default:
      return state;
  }
}
