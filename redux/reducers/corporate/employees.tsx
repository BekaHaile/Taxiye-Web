import * as actionTypes from "../../types/corporate/employees";
let date = new Date();
const data = {
  phone_no: "",
  code: 251,
  first_name: "",
  last_name: "",
  email: "",
  group: null,
};
const initialState = {
  selected_user: null,
  default_data: data,
  employees: [],
  groups: [],
  new_employees: [],
  isFormValid: false,
  query: "",
  q: "",
  loading: false,
  search_loading: false,
  selected_employee: null,
  route: "",
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
    case actionTypes.EMPLOYEE_FORM_INITIATED:
      return {
        ...state,
        new_employees: [...state.new_employees, action.payload.employee],
      };
    case actionTypes.GROUP_FETCHED:
      return {
        ...state,
        groups: action.payload.groups,
      };
    case actionTypes.EMPLOYEE_APPENDED:
      return {
        ...state,
        new_employees: state.new_employees.concat(action.payload.new_employees),
      };
    case actionTypes.EMPLOYEE_FIRST_NAME_CHANGED:
      return {
        ...state,
        new_employees: [
          ...state.new_employees.slice(0, action.payload.index),
          {
            first_name: action.payload.first_name,
            last_name: state.new_employees[action.payload.index].last_name,
            email: state.new_employees[action.payload.index].email,
            group: state.new_employees[action.payload.index].group,
            phone_no: state.new_employees[action.payload.index].phone_no,
            code: state.new_employees[action.payload.index].code,
          },
          ...state.new_employees.slice(action.payload.index + 1),
        ],
      };
    case actionTypes.EMPLOYEE_LAST_NAME_CHANGED:
      return {
        ...state,
        new_employees: [
          ...state.new_employees.slice(0, action.payload.index),
          {
            last_name: action.payload.last_name,
            first_name: state.new_employees[action.payload.index].first_name,
            group: state.new_employees[action.payload.index].group,
            email: state.new_employees[action.payload.index].email,
            phone_no: state.new_employees[action.payload.index].phone_no,
            code: state.new_employees[action.payload.index].code,
          },
          ...state.new_employees.slice(action.payload.index + 1),
        ],
      };
    case actionTypes.EMPLOYEE_EMAIL_CHANGED:
      return {
        ...state,
        new_employees: [
          ...state.new_employees.slice(0, action.payload.index),
          {
            first_name: state.new_employees[action.payload.index].first_name,
            last_name: state.new_employees[action.payload.index].last_name,
            group: state.new_employees[action.payload.index].group,
            phone_no: state.new_employees[action.payload.index].phone_no,
            code: state.new_employees[action.payload.index].code,
            email: action.payload.email,
          },
          ...state.new_employees.slice(action.payload.index + 1),
        ],
      };
    case actionTypes.EMPLOYEE_PHONE_ADDED:
      return {
        ...state,
        new_employees: [
          ...state.new_employees.slice(0, action.payload.index),
          {
            first_name: state.new_employees[action.payload.index].first_name,
            last_name: state.new_employees[action.payload.index].last_name,
            group: state.new_employees[action.payload.index].group,
            email: state.new_employees[action.payload.index].email,
            phone_no: action.payload.phone_no,
            code: action.payload.code,
          },
          ...state.new_employees.slice(action.payload.index + 1),
        ],
      };

    case actionTypes.EMPLOYEE_GROUP_CHANGED:
      return {
        ...state,
        new_employees: [
          ...state.new_employees.slice(0, action.payload.index),
          {
            first_name: state.new_employees[action.payload.index].first_name,
            last_name: state.new_employees[action.payload.index].last_name,
            email: state.new_employees[action.payload.index].email,
            phone_no: state.new_employees[action.payload.index].phone_no,
            code: state.new_employees[action.payload.index].code,
            group: action.payload.group,
          },
          ...state.new_employees.slice(action.payload.index + 1),
        ],
      };
    case actionTypes.EMPLOYEE_REMOVED:
      return {
        ...state,
        new_employees: [
          ...state.new_employees.slice(0, action.payload.index),
          ...state.new_employees.slice(action.payload.index + 1),
        ],
      };
    case actionTypes.EMPLOYEE_FORM_VALIDATED:
      return {
        ...state,
        isFormValid: action.payload.isValid,
      };
    case actionTypes.RESET_EMPLOYEE_REGISTRATION:
      return {
        ...state,
        new_employees: [data],
      };

    case actionTypes.EMPLOYEE_ROUTE_CHANGED:
      return {
        ...state,
        route: action.payload.route,
      };
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

    case actionTypes.TOGGLE_USER_STATUS_INITIATED:
      return {
        ...state,
        selected_user: action.payload.selected_user,
      };

    case actionTypes.TOGGLE_USER_STATUS_FINISHED:
      return {
        ...state,
        selected_user: null,
      };

    default:
      return state;
  }
}
