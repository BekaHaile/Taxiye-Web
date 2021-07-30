import * as actions from "../../actions/corporate/home";
import * as actiontypes from "../../types/corporate/home";
import axios from "axios";

const overview = {
  employees: "455",
  rides: "44",
  bills: "45, 600 Birr",
  balance: "45, 600 Birr",
};

const recentRides = [
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
];

export const corporate_home = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_home;
  if (action.type == actiontypes.COMPANY_OVERVIEW_PULL_IN_INITIATED) {
    next(actions.setCompanyOverViewLoading(true));
    await sleep(3000);
    next(actions.setOverviewData(overview));
  } else if (action.type == actiontypes.RECENT_RIDES_PULL_IN_INITIATED) {
    next(actions.setRecentRidesLoading(true));

    await sleep(4000);
    next(actions.setRecentRides(recentRides));
  }
};

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
