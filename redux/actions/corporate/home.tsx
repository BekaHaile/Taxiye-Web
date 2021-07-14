import * as actions from "../../types/corporate/home";

/**
 * This function is called to fetch overview data about a company
 * It initiates a middle ware that makes an api call to the backend
 * Doe not take any params as an argument
 * @returns action type as an object
 */
export const getOverviewData = () => {
  return {
    type: actions.COMPANY_OVERVIEW_PULL_IN_INITIATED,
  };
};

/**
 * This function is called to set overview data after the api call
 * It will be initiated after the middleware makes an api call
 * This function takes returned data as an argument
 * Doe not take any params as an argument
 * @param overview
 * @returns action type and overview payload as an object
 */
export const setOverviewData = (overview) => {
  return {
    type: actions.COMPANY_OVERVIEW_PULLED_IN,
    payload: {
      overview: overview,
    },
  };
};

/**
 * This function changes loading status
 * Of company overview data, while making api call
 * @param loading
 * @returns action type and loading payload as an object
 */
export const setCompanyOverViewLoading = (loading) => {
  return {
    type: actions.COMPANY_OVERVIEW_LOADING_CHANGED,
    payload: {
      loading: loading,
    },
  };
};

/**
 * This function is called to fetch overview data about a company
 * It initiates a middle ware that makes an api call to the backend
 * Doe not take any params as an argument
 * @returns action type as an object
 */
export const getRecentRidesData = () => {
  return {
    type: actions.RECENT_RIDES_PULL_IN_INITIATED,
  };
};

/**
 * This function is called to set overview data after the api call
 * It will be initiated after the middleware makes an api call
 * This function takes returned data as an argument
 * Doe not take any params as an argument
 * @param rides
 * @returns action type and rides payload as an object
 */
export const setRecentRides = (recentRides) => {
  return {
    type: actions.RECENT_RIDES_PULLED_IN,
    payload: {
      recentRides: recentRides,
    },
  };
};

/**
 * This function changes loading status
 * Of company recent rides data, while making api call
 * @param loading
 * @returns action type and payload as an object
 */
export const setRecentRidesLoading = (loading) => {
  return {
    type: actions.RECENT_RIDES_LOADING_CHANGED,
    payload: {
      loading: loading,
    },
  };
};
