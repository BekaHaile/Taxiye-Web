import * as actions from "../../actions/corporate/group";
import * as actiontypes from "../../types/corporate/group";
import axios from "axios";

// const groups = [
//   {
//     title: "Taxiye Employees",
//     balance: "10,000.00 Birr",
//     maximum_rides: 3333,
//     employees: 455,
//     payment: "Manual",
//   },
//   {
//     title: "Taxiye Employees",
//     balance: "10,000.00 Birr",
//     maximum_rides: 3333,
//     employees: 455,
//     payment: "Manual",
//   },

//   {
//     title: "Taxiye Employees",
//     balance: "10,000.00 Birr",
//     maximum_rides: 3333,
//     employees: 455,
//     payment: "Manual",
//   },
// ];

export const corporate_group = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_group;
  if (action.type == actiontypes.FETCH_GROUP_INITIATED) {
    next(actions.setLoading(true));
    await sleep(3000);
    var groups = fetchGroups(data["query"]);
    next(actions.setGroupData(groups));
  } else if (
    action.type == actiontypes.GROUP_NAME_ADDED ||
    action.type == actiontypes.MONTHLY_BUDGET_ADDED ||
    action.type == actiontypes.MONTHLY_RIDE_ADDED ||
    action.type == actiontypes.PAYMENT_MODE_SELECTED ||
    action.type == actiontypes.DAYS_SELECTED ||
    action.type == actiontypes.TIME_RANGE_ADDED ||
    action.type == actiontypes.VEHICLE_SELECTION_MADE ||
    action.type == actiontypes.VEHICLE_REMOVED
  ) {
    next(actions.setValidation(validateForm(data)));
  } else if (action.type == actiontypes.RESET) {
    next(actions.changeRoute(""));
  }
};

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function fetchGroups(query) {
  const data = [];
  var ran = Math.floor(Math.random() * 6);
  for (let i = 0; i < ran; i++) {
    data.push({
      key: i,
      title: "Taxiye Employees",
      balance: "10,000.00 Birr",
      maximum_rides: 3333,
      employees: 455,
      payment: "Manual",
    });
  }
  return data;
}

function validateForm(data) {
  return (
    data["group_name"] != "" &&
    data["group_name"] != null &&
    data["monthly_budget"] != "" &&
    data["monthly_budget"] != null &&
    data["monthly_ride"] != "" &&
    data["monthly_ride"] != null &&
    data["days"].length > 0 &&
    data["payment_mode"] != null &&
    data["time_range"] != null &&
    data["selected_vehicles"].length > 0 &&
    data["selected_vehicles"] != null
  );
}
