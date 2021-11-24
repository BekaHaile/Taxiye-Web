import * as actions from "../../actions/corporate/employees";
import * as typeActions from "../../types/corporate/employees";
import axios from "axios";
import * as validationUtils from "../../../utils/validation";
import { getVehicles } from "./dispatch";
import { fetchGroups } from "./group";

export const corporate_employees = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_employees;
  let corporate_data = store.getState().corporate;
  if (action.type == typeActions.QUERY_ADDED) {
    next(actions.setSearchLoading(true));
    var res = await getEmployeesList(data["q"], corporate_data);
    await getVehicles(data, next);
    next(actions.addFetchedEmployees(res));
    next(actions.setSearchLoading(false));
  } else if (
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
    var groups = await fetchGroups(corporate_data, "");
    next(actions.setGroups(groups));
    next(actions.setLoading(false));
  } else if (action.type == typeActions.EMPLOYEE_REGISTRATION_INITIATED) {
    next(actions.setLoading(true));
    var groups = await registerEmployees(data, corporate_data);
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

export async function registerEmployees(corporate_employee, corporate_data) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/add_user_to_corporate`,

      {
        business_id: `${corporate_data["corporate_detail"]["business_details"]["business_id"]}`,
        token: `${corporate_data["corporate_detail"]["token"]}`,
        employees: corporate_employee["new_employees"]?.map((employee) => {
          return {
            phone_no: `${employee["code"]}${employee["phone_no"]}`,
            country_code: `${employee["code"]}`,
            group_id: `${employee["group_id"]}`,
            email: `${employee["email"]}`,
            username: `${employee["first_name"]} ${employee["last_name"]}`,
          };
        }),
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
      validationUtils.validatePhone(
        data[i]["phone_no"],
        `+${data[i]["code"]}`
      ) &&
      data[i]["code"] != "" &&
      data[i]["code"] != null &&
      data[i]["first_name"] != "" &&
      data[i]["first_name"] != null &&
      data[i]["last_name"] != "" &&
      data[i]["last_name"] != null &&
      validationUtils.validateEmail(data[i]["email"]) &&
      data[i]["group_id"] != "" &&
      data[i]["group_id"] != null;
    if (!isValid) break;
  }
  return isValid && data.length > 0;
}
