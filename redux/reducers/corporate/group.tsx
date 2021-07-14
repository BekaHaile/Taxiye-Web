import * as actionTypes from "../../types/corporate/group";
let date = new Date();
const initialState = {
  route: "",
  groups: [],
  loading: false,
  group_name: "",
  monthly_budget: "",
  monthly_ride: 1,
  days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  payment_mode: "auto-paid",
  time_range: { start: "0:00", end: "23:59" },
  selected_vehicles: [],
  isValid: false,
};

export default function corporateGroupReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GROUP_ROUTE_CHANGED:
      return {
        ...state,
        route: action.payload.route,
      };
    case actionTypes.QUERY_ADDED:
      return {
        ...state,
        query: action.payload.query,
      };

    case actionTypes.GROUP_DATA_FETCHED:
      return {
        ...state,
        groups: action.payload.groups,
        loading: false,
      };

    case actionTypes.INITIATE_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case actionTypes.GROUP_NAME_ADDED:
      return {
        ...state,
        group_name: action.payload.group_name,
      };
    case actionTypes.MONTHLY_BUDGET_ADDED:
      return {
        ...state,
        monthly_budget: action.payload.monthly_budget,
      };
    case actionTypes.MONTHLY_RIDE_ADDED:
      return {
        ...state,
        monthly_ride: action.payload.monthly_ride,
      };
    case actionTypes.PAYMENT_MODE_SELECTED:
      return {
        ...state,
        payment_mode: action.payload.payment_mode,
      };
    case actionTypes.DAYS_SELECTED:
      return {
        ...state,
        days: action.payload.days,
      };
    case actionTypes.TIME_RANGE_ADDED:
      return {
        ...state,
        ...state,
        time_range: {
          ...state.time_range,
          start: action.payload.start,
          end: action.payload.end,
        },
      };
    case actionTypes.VEHICLE_SELECTION_MADE:
      return {
        ...state,
        selected_vehicles: [...state.selected_vehicles, action.payload.vehicle],
      };

    case actionTypes.VEHICLE_REMOVED:
      return {
        ...state,
        selected_vehicles: [
          ...state.selected_vehicles.slice(0, action.payload.index),
          ...state.selected_vehicles.slice(action.payload.index + 1),
        ],
      };

    case actionTypes.FORM_VALIDATED:
      return {
        ...state,
        isValid: action.payload.isValid,
      };

    case actionTypes.RESET:
      return {
        ...state,
        group_name: "",
        monthly_budget: "",
        monthly_ride: 1,
        days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        payment_mode: "auto-paid",
        time_range: { start: "0:00", end: "23:59" },
        selected_vehicles: [],
        isValid: false,
      };

    default:
      return state;
  }
}
