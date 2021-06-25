import * as actions from "../../types/corporate/employees";

export const addQuery = (query) => {
  return {
    type: actions.QUERY_ADDED,
    payload: {
      query: query,
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

  
