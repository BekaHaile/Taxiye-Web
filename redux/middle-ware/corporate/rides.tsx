import * as actions from "../../actions/corporate/rides";
import * as actionTypes from "../../types/corporate/rides";
import * as rideApi from "../../../services/api/corporate/ride/index.api";
import fetchRidesDto from "../../../models/corporate/ride/fetchRidesDto";
import fetchCitiesDto from "../../../models/corporate/ride/fetchCitiesDto";
import fetchRidesInfoDto from "../../../models/corporate/ride/fetchRidesInfoDto";

export const corporate_rides = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_rides;
  let corporate_data = store.getState().corporate;
  if (
    action.type == actionTypes.FETCH_RIDES_INITIATED ||
    action.type == actionTypes.DATE_CHANGED ||
    action.type == actionTypes.CITY_CHANGED ||
    action.type == actionTypes.TYPE_CHANGED
  ) {
    next(actions.setLoading(true));
    let rides = await rideApi.fetchRides(fetchRidesDto(data, corporate_data));
    next(actions.setRides(rides));
  } else if (action.type == actionTypes.RESET) {
    next(actions.setLoading(true));
    let rides = await rideApi.fetchRides(fetchRidesDto(data, corporate_data));
    next(actions.setRides(rides));
  } else if (action.type == actionTypes.CITY_FETCH_INITIATED) {
    next(actions.setLoading(true));
    let cities = await rideApi.fetchCities(fetchCitiesDto(corporate_data));
    next(actions.cityChanged(cities[0]?.city_id));
    next(actions.setCitiesList(cities));

    next(actions.setLoading(false));
  }
};
