import * as actions from "../../actions/corporate/rides";
import * as actiontypes from "../../types/corporate/rides";
import axios from "axios";

const request_status = {
  "on-going": 1,
  completed: 2,
};

export const corporate_rides = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_rides;
  let corporate_data = store.getState().corporate;
  if (
    action.type == actiontypes.FETCH_RIDES_INITIATED ||
    action.type == actiontypes.DATE_CHANGED ||
    action.type == actiontypes.CITY_CHANGED ||
    action.type == actiontypes.TYPE_CHANGED
  ) {
    next(actions.setLoading(true));
    var rides = await fetchRides(data, corporate_data);
    next(actions.setRides(rides));
  } else if (action.type == actiontypes.RESET) {
    next(actions.setLoading(true));
    var rides = await fetchRides(data, corporate_data);
    next(actions.setRides(rides));
  } else if (action.type == actiontypes.CITY_FETCH_INITIATED) {
    next(actions.setLoading(true));
    var cities = await fetchCities(corporate_data);
    next(actions.cityChanged(cities[0]?.city_id));
    next(actions.setCitiesList(cities));
    
    next(actions.setLoading(false));
  }

};

export async function fetchRides(data, corporate_data) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_TAXIYE_RIDES_HOST}/get_ride_details`,
      {
        params: {
          token: `${corporate_data["corporate_detail"]["token"]}`,
          business_id: `${corporate_data["corporate_detail"]["business_details"]["business_id"]}`,
          status: request_status[`${data["type"]}`],
          city_id: data["city"],
          start_date: getValidDate(data["date"]),
        },
        timeout: 10000,
      }
    );
    return res.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function fetchCities(corporate_data) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_TAXIYE_RIDES_HOST}/get_city_info_operator_wise`,
      {
        params: {
          token: `${corporate_data["corporate_detail"]["token"]}`,
        },
        timeout: 10000,
      }
    );
    return res.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

function getValidDate(date) {
  return date
    .toISOString()
    .replace("Z", " ")
    .replace("T", " ")
    .substring(0, 19);
}
