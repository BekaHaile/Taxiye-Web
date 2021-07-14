import * as actions from "../../actions/corporate/rides";
import * as actiontypes from "../../types/corporate/rides";
import axios from "axios";
import { validateEmail, showError } from "../common";

export const corporate_rides = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_rides;
  if (
    action.type == actiontypes.FETCH_RIDES_INITIATED ||
    action.type == actiontypes.DATE_CHANGED ||
    action.type == actiontypes.CITY_CHANGED ||
    action.type == actiontypes.TYPE_CHANGED
  ) {
    next(actions.setLoading(true));
    await sleep(3000);
    var rides = fetchRides(data);
    next(actions.setRides(rides));
  } else if (action.type == actiontypes.RESET) {
    next(actions.setLoading(true));
    await sleep(3000);
    var rides = fetchRides(data);
    next(actions.setRides(rides));
  }
};

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function fetchRides(data) {
  const res = [];
  var ran = Math.floor(Math.random() * 15);
  for (let i = 0; i < ran; i++) {
    if(data["type"]=="on-going")
    res.push({
      key: i,
      name: `Edward King ${i}`,
      group: "El Auto Employees",
      request_time: `2020-02-06 12:10 AM`,
      pick_up_location: "Sarbet, Addis Ababa",
      drop_off_location: `Alemayehu Building`,
      status: "Active",
    });
    else
    res.push({
      key: i,
      name: `Edward King ${i}`,
      group: "El Auto Employees",
      request_time: `2020-02-06 12:10 AM`,
      pick_up_location: "Sarbet, Addis Ababa",
      drop_off_location: `Alemayehu Building`,
      amount: 554 - i,
    });
  }
  return res;
}
