import * as actionTypes from "../../types/corporate/employees";
let date = new Date();
const initialState = {
  employees: [],
  query: "",
  q:"",
  loading: false,
  search_loading: false,
  selected_employee: null,
  city: "",
  origin: {
    address: null,
    location: null,
  },
  destination: {
    address: null,
    location: null,
  },
  date: date,
  time: ("0" + date.getHours()).slice(-2) + ":" + date.getMinutes(),
  isValid: false,
  vehicles: [],
  selected_vehicle: null,
};

export default function corporateEmployeeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.QUERY_ADDED:
      return { ...state, query: action.payload.query, selected_employee: null };
    case actionTypes.LOADING_INITIATED:
      return { ...state, loading: action.payload.loading };
    case actionTypes.SEARCH_LOADING_INITIATED:
      return { ...state, search_loading: action.payload.search_loading };
    case actionTypes.REQUEST_VALIDATED:
      return { ...state, isValid: action.payload.isValid };

    case actionTypes.EMPLOYEE_SELECTED:
      return {
        ...state,
        selected_employee: action.payload.selected_employee,
        employees: [],
        query: action.payload.selected_employee.name,
      };
    case actionTypes.EMPLOYEE_LIST_FETCHED:
      return {
        ...state,
        employees: action.payload.employees,
      };

    case actionTypes.API_QUERY_ADDED:
      return { ...state, q: action.payload.q };

    case actionTypes.ORIGIN_SELECTED:
      return { ...state, origin: action.payload.origin };
    case actionTypes.DESTINATION_SELECTED:
      return { ...state, destination: action.payload.destination };
    case actionTypes.DATE_ADDED:
      return { ...state, date: action.payload.date };
    case actionTypes.TIME_ADDED:
      return { ...state, time: action.payload.time };
    case actionTypes.VEHICLES_ADDED:
      return {
        ...state,
        vehicles: action.payload.vehicles,
        city: action.payload.city,
        selected_vehicle: action.payload.vehicles[0],
      };
    case actionTypes.VEHICLE_SELECTED:
      return {
        ...state,
        selected_vehicle: action.payload.selected_vehicle,
      };

    default:
      return state;
  }
}
