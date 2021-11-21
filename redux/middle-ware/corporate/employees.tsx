import * as actions from "../../actions/corporate/employees";
import * as typeActions from "../../types/corporate/employees";
import axios from "axios";
import * as validationUtils from "../../../utils/validation";
import { getVehicles } from "./dispatch";
import {fetchGroups} from "./group";

export const corporate_employees = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_employees;
  let corporate_data = store.getState().corporate;
  if (action.type == "QUERY_ADDED") {
    next(actions.setSearchLoading(true));
    var res = await getEmployees(data["employee_name"]);
    await getVehicles(data, next);
    next(actions.addFetchedEmployees(res));
    next(actions.setSearchLoading(false));
  }
  if (
    action.type == typeActions.EMPLOYEE_SELECTED ||
    action.type == typeActions.DESTINATION_SELECTED ||
    action.type == typeActions.ORIGIN_SELECTED ||
    action.type == typeActions.DATE_ADDED ||
    action.type == typeActions.TIME_ADDED
  ) {
    await getVehicles(data, next);
  } else if (action.type == typeActions.GET_EMPLOYEES_INITIATED) {
    next(actions.setLoading(true));
    var employees = await getEmployeesList(data["q"], corporate_data);
    next(actions.addFetchedEmployees(employees));
    next(actions.setLoading(false));
  } else if (action.type == typeActions.EMPLOYEE_FORM_INITIATED) {
    next(actions.setLoading(true));
    var groups = await fetchGroups(corporate_data, '');
    next(actions.setGroups(groups));
    next(actions.setLoading(false));
  } else if (
    action.type == typeActions.EMPLOYEE_APPENDED ||
    action.type == typeActions.EMPLOYEE_PHONE_ADDED ||
    action.type == typeActions.EMPLOYEE_FIRST_NAME_CHANGED ||
    action.type == typeActions.EMPLOYEE_EMAIL_CHANGED ||
    action.type == typeActions.EMPLOYEE_GROUP_CHANGED ||
    action.type == typeActions.EMPLOYEE_LAST_NAME_CHANGED ||
    action.type == typeActions.EMPLOYEE_REMOVED
  ) {
    var isValid = validateEmployeeForm(data["new_employees"]);
    next(actions.setFormValidation(isValid));
  } else if (action.type == typeActions.TOGGLE_USER_STATUS_INITIATED) {
    next(actions.setLoading(true));
    await toggleEmployeeStatus(data, corporate_data, next);
    var employees = await getEmployeesList(data["q"], corporate_data);
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

// function setEmployees(query) {
//   const data = [];
//   var ran = Math.floor(Math.random() * 15);
//   for (let i = 0; i < ran; i++) {
//     data.push({
//       key: i,
//       name: `Edward King ${i}`,
//       group: "El Auto Employees",
//       monthly_budget: `782.01 Birr`,
//       monthly_ride_limit: 554 - i,
//       status: `Active`,
//     });
//   }
//   return data;
// }

export async function getEmployeesList(query, corporate_data) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/user/list`,
      {
        token: `${corporate_data["corporate_detail"]["token"]}`,
      },
      { timeout: 10000 }
    );
    return res.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function toggleEmployeeStatus(data, corporate_data, next) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/toggle_corporate_user_status`,
      {
        token: `${corporate_data["corporate_detail"]["token"]}`,
        user_id: data["selected_user"]["user_id"],
        is_active: data["selected_user"]["is_active"] == 1 ? 2 : 1,
      },
      { timeout: 10000 }
    );
    return res.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}


function validateEmployeeForm(data) {
  var isValid = true;
  for (var i = 0; i < data.length; ++i) {
    isValid =
      validationUtils.validatePhone(data[i]["phone_no"], `+${data[i]["code"]}`) &&
      data[i]["code"] != "" &&
      data[i]["code"] != null &&
      data[i]["first_name"] != "" &&
      data[i]["first_name"] != null &&
      data[i]["last_name"] != "" &&
      data[i]["last_name"] != null &&
      validationUtils.validateEmail(data[i]["email"]) &&
      data[i]["group"] != "" &&
      data[i]["group"] != null;
    if (!isValid) break;
  }
  return isValid && data.length > 0;
}
