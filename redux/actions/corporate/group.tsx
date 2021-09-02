import * as actions from "../../types/corporate/group";

export const changeRoute = (route) => {
  return {
    type: actions.GROUP_ROUTE_CHANGED,
    payload: {
      route: route,
    },
  };
};

export const fetchGroups = () => {
  return {
    type: actions.FETCH_GROUP_INITIATED,
  };
};

export const queryAdded = (query) => {
  return {
    type: actions.QUERY_ADDED,
    payload: {
      query: query,
    },
  };
};

export const setGroupData = (groups) => {
  return {
    type: actions.GROUP_DATA_FETCHED,
    payload: {
      groups: groups,
    },
  };
};

export const setLoading = (loading) => {
  return {
    type: actions.INITIATE_LOADING,
    payload: {
      loading: loading,
    },
  };
};

export const addGroupName = (group_name) => {
  return {
    type: actions.GROUP_NAME_ADDED,
    payload: {
      group_name: group_name,
    },
  };
};

export const addMonthlyBudget = (monthly_budget) => {
  return {
    type: actions.MONTHLY_BUDGET_ADDED,
    payload: {
      monthly_budget: monthly_budget,
    },
  };
};

export const addMonthlyRide = (monthly_ride) => {
  return {
    type: actions.MONTHLY_RIDE_ADDED,
    payload: {
      monthly_ride: monthly_ride,
    },
  };
};

export const changePaymentMode = (payment_mode) => {
  return {
    type: actions.PAYMENT_MODE_SELECTED,
    payload: {
      payment_mode: payment_mode,
    },
  };
};

export const changeSelectedDays = (days) => {
  return {
    type: actions.DAYS_SELECTED,
    payload: {
      days: days,
    },
  };
};

export const timeRangeChanged = (time_range) => {
  return {
    type: actions.TIME_RANGE_ADDED,
    payload: {
      start: time_range.start,
      end: time_range.end,
    },
  };
};

export const selectVehicle = (vehicle) => {
  return {
    type: actions.VEHICLE_SELECTION_MADE,
    payload: {
      vehicle: vehicle,
    },
  };
};

export const removeVehicle = (index) => {
  return {
    type: actions.VEHICLE_REMOVED,
    payload: {
      index: index,
    },
  };
};

export const setValidation = (isValid) => {
  return {
    type: actions.FORM_VALIDATED,
    payload: {
      isValid: isValid,
    },
  };
};


export const resetForm = () => {
  return {
    type: actions.RESET,
    
  };
};
