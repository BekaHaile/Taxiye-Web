import * as actions from "../../actions/corporate/employees";
import axios from "axios";
import { validateEmail, showError } from "../common";
import { getVehicles } from "./dispatch";

export const corporate_employees = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_employees;
  if (action.type == "QUERY_ADDED") {
    next(actions.setSearchLoading(true));
    var res = await getEmployees(data["employee_name"]);
    await getVehicles(data, next);
    next(actions.addFetchedEmployees(res));
    next(actions.setSearchLoading(false));
  }
  if (
    action.type == "EMPLOYEE_SELECTED" ||
    action.type == "EMPLOYEE_DISPATCH_DESTINATION_SELECTED" ||
    action.type == "EMPLOYEE_DISPATCH_ORIGIN_SELECTED" ||
    action.type == "EMPLOYEE_DISPATCH_DATE_ADDED" ||
    action.type == "EMPLOYEE_DISPATCH_TIME_ADDED"
  ) {
    await getVehicles(data, next);
  } else if (action.type == "GET_EMPLOYEES_INITIATED") {
    next(actions.setLoading(true));
    await sleep(3000);
    var employees = setEmployees(data["q"]);
    next(actions.addFetchedEmployees(employees));
    next(actions.setLoading(false));
  }
};

async function getEmployees(query) {
  try {
    var ran = Math.floor(Math.random() * 10);
    var resp = [];
    for (var i = 0; i < ran; ++i) {
      resp.push({
        id: "" + i,
        name: "Megersa Haile",
        phone_no: "+25199823632" + i,
      });
    }
    await sleep(500);
    return resp;
    const { NEXT_PUBLIC_AGGREGATE_HOST } = process.env;
    const res = await axios.get(
      `${NEXT_PUBLIC_AGGREGATE_HOST}/account/generate_login_otp/${query}`,

      { timeout: 5000 }
    );
    return res.data;
  } catch (e) {
    return null;
  }
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function setEmployees(query) {
  const data = [];
  var ran = Math.floor(Math.random() * 15);
  for (let i = 0; i < ran; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      group: "El Auto Employees",
      monthly_budget: `782.01 Birr`,
      monthly_ride_limit: 554 - i,
      status: `Active`,
    });
  }
  return data;
}
