import * as actions from "../../actions/corporate/home";
import * as actionTypes from "../../types/corporate/home";
import axios from "axios";

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
  let corporate_data = store.getState().corporate;
  if (action.type == actionTypes.COMPANY_OVERVIEW_PULL_IN_INITIATED) {
    next(actions.setCompanyOverViewLoading(true));
    var res = await fetchOverview(corporate_data);
    next(actions.setOverviewData(res));
  } else if (action.type == actionTypes.RECENT_RIDES_PULL_IN_INITIATED) {
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

export async function fetchOverview(corporate_data) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/info`,
      {
        token: `${corporate_data["corporate_detail"]["token"]}`,
      },
      {
        timeout: 10000,
      }
    );
    return res.data.data;
  } catch (e) {
    return [];
  }
}
