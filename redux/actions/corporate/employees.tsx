import * as actions from "../../types/corporate/employees";

export const addQuery = (query) => {
  return {
    type: actions.QUERY_ADDED,
    payload: {
      query: query,
    },
  };
};

export const addApiQuery = (q) => {
  return {
    type: actions.API_QUERY_ADDED,
    payload: {
      q: q,
    },
  };
};

export const setSearchLoading = (search_loading) => {
  return {
    type: actions.SEARCH_LOADING_INITIATED,
    payload: {
      search_loading: search_loading,
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

export const addFetchedEmployees = (employees) => {
  return {
    type: actions.EMPLOYEE_LIST_FETCHED,
    payload: {
      employees: employees,
    },
  };
};

export const setSelectedEmployee = (selected_employee) => {
  return {
    type: actions.EMPLOYEE_SELECTED,
    payload: {
      selected_employee: selected_employee,
    },
  };
};

export const selectOrigin = ({ origin }) => {
  return {
    type: actions.ORIGIN_SELECTED,
    payload: {
      origin: origin,
    },
  };
};

export const selectDestination = ({ destination }) => ({
  type: actions.DESTINATION_SELECTED,
  payload: {
    destination: destination,
  },
});

export const changeDate = (date) => ({
  type: actions.DATE_ADDED,
  payload: {
    date: date,
  },
});

export const changeTime = (time) => ({
  type: actions.TIME_ADDED,
  payload: {
    time: time,
  },
});

export const validateInput = (isValid) => ({
  type: actions.REQUEST_VALIDATED,
  payload: {
    isValid: isValid,
  },
});

export const addVehicles = (city, vehicles) => ({
  type: actions.VEHICLES_ADDED,
  payload: {
    vehicles: vehicles,
    city: city,
  },
});
export const setSelectedVehicle = (selected_vehicle) => ({
  type: actions.VEHICLE_SELECTED,
  payload: {
    selected_vehicle: selected_vehicle,
  },
});

/**
 *
 * @param query
 * @returns
 */
export const getEmployees = () => ({
  type: actions.GET_EMPLOYEES_INITIATED,
});

export const initiateEmployeeForm = (employee) => ({
  type: actions.EMPLOYEE_FORM_INITIATED,
  payload: {
    employee: employee,
  },
});

export const setGroups = (groups) => ({
  type: actions.GROUP_FETCHED,
  payload: {
    groups: groups,
  },
});

export const setFormValidation = (isValid) => ({
  type: actions.EMPLOYEE_FORM_VALIDATED,
  payload: {
    isValid: isValid,
  },
});

export const appendEmployee = (new_employees) => ({
  type: actions.EMPLOYEE_APPENDED,
  payload: {
    new_employees: new_employees,
  },
});

export const resetRegistration = () => ({
  type: actions.RESET_EMPLOYEE_REGISTRATION,
});


export const removeEmployee = (index) => ({
  type: actions.EMPLOYEE_REMOVED,
  payload: {
    index: index,
  },
});

export const changeFirstName = (first_name, index) => ({
  type: actions.EMPLOYEE_FIRST_NAME_CHANGED,
  payload: {
    index: index,
    first_name: first_name,
  },
});

export const phoneAdded = (phone_no, code, index) => ({
  type: actions.EMPLOYEE_PHONE_ADDED,
  payload: {
    index: index,
    phone_no: phone_no,
    code: code
  },
});

export const changeLastName = (last_name, index) => ({
  type: actions.EMPLOYEE_LAST_NAME_CHANGED,
  payload: {
    index: index,
    last_name: last_name,
  },
});

export const changeEmail = (email, index) => ({
  type: actions.EMPLOYEE_EMAIL_CHANGED,
  payload: {
    index: index,
    email: email,
  },
});

export const changeGroup = (group, index) => ({
  type: actions.EMPLOYEE_GROUP_CHANGED,
  payload: {
    index: index,
    group: group,
  },
});

export const changeRoute = (route) => {
  return {
    type: actions.EMPLOYEE_ROUTE_CHANGED,
    payload: {
      route: route,
    },
  };
};
