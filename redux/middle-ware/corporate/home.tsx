import * as actions from "../../actions/corporate/home";
import * as ridesAction from "../../actions/corporate/rides";
import * as actionTypes from "../../types/corporate/home";
import * as corporateApi from "../../../services/api/corporate/index.api";
import fetchOverviewDto from "../../../models/corporate/fetchOverviewDto";
import * as rideApi from "../../../services/api/corporate/ride/index.api";
import fetchRidesInfoDto from "../../../models/corporate/ride/fetchRidesInfoDto";
export const corporate_home = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_home;
  let corporate_data = store.getState().corporate;
  if (action.type == actionTypes.COMPANY_OVERVIEW_PULL_IN_INITIATED) {
    next(actions.setCompanyOverViewLoading(true));
    var res = await corporateApi.fetchOverview(
      fetchOverviewDto(corporate_data)
    );
    next(actions.setOverviewData(res));
  } else if (action.type == actionTypes.RECENT_RIDES_PULL_IN_INITIATED) {
    next(ridesAction.setSelectedType("all"));
    next(actions.setRecentRidesLoading(true));
    let rides = await rideApi.fetchRidesInfo(fetchRidesInfoDto(corporate_data));
    next(actions.setRecentRides(rides));
  }
};