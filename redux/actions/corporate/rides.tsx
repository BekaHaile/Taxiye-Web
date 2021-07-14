import * as actions from "../../types/corporate/rides";

export const dateChanged = (date) => {
  return {
    type: actions.DATE_CHANGED,
    payload: {
      date: date,
    },
  };
};

export const cityChanged = (city) => {
  return {
    type: actions.CITY_CHANGED,
    payload: {
      city: city,
    },
  };
};

export const searchQueryChanged = (query) => {
  return {
    type: actions.QUERY_CHANGED,
    payload: {
      query: query,
    },
  };
};

export const fetchRides = () => {
  return {
    type: actions.FETCH_RIDES_INITIATED,
  };
};

export const setRides = (rides) => {
  return {
    type: actions.RIDES_FETCHED,
    payload: {
      rides: rides,
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

export const setSelectedType = (type) => {
    return {
      type: actions.TYPE_CHANGED,
      payload: {
        type: type,
      },
    };
  };



export const reset = () => {
  return {
    type: actions.RESET,
  };
};
