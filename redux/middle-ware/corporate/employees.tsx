import * as actions from "../../actions/corporate/employees";
import * as typeActions from "../../types/corporate/employees";
import axios from "axios";
import * as validationUtils from "../../../utils/validation";
import { getVehicles } from "./dispatch";
import * as corporateApi from "../../../services/api/corporate/employee/index.api";
import * as groupApi from "../../../services/api/corporate/group/index.api";
import registerEmployeeDto from "../../../models/corporate/employee/registerEmployeeDto";
import toggleEmployeeStatusDto from "../../../models/corporate/employee/toggleEmployeeStatusDto";
import fetchGroupsDto from "../../../models/corporate/group/fetchGroupsDto";
import checkUserExistanceDto from "../../../models/corporate/employee/checkUserExistanceDto";

export const corporate_employees = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_employees;
  let corporate_data = store.getState().corporate;
  if (action.type == typeActions.QUERY_ADDED) {
    next(actions.setSearchLoading(true));
    var res = await corporateApi.getEmployeesList(
      `${corporate_data["corporate_detail"]["token"]}`
    );
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
    var employees = await corporateApi.getEmployeesList(
      `${corporate_data["corporate_detail"]["token"]}`
    );
    var groups = await groupApi.fetchGroups(fetchGroupsDto(corporate_data));
    employees.group;
    next(actions.addFetchedEmployees(employees));
    next(actions.setLoading(false));
  } else if (action.type == typeActions.EMPLOYEE_FORM_INITIATED) {
    next(actions.setLoading(true));
    var groups = await groupApi.fetchGroups(fetchGroupsDto(corporate_data));
    next(actions.setGroups(groups));
    next(actions.setLoading(false));
  } else if (action.type == typeActions.EMPLOYEE_REGISTRATION_INITIATED) {
    next(actions.setLoading(true));
    var groups = await corporateApi.registerEmployees(
      registerEmployeeDto(data, corporate_data)
    );
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
    let isValid = false;
    if (action.type == typeActions.EMPLOYEE_PHONE_ADDED) {
      let employeeTemp = data["new_employees"][data["employee_index"]];
      isValid = validationUtils.validatePhone(
        `${employeeTemp["phone_no"]}`,
        `${employeeTemp["code"]}`
      );
      if (isValid) {
        next(actions.setLoading(true));
        let existanceRes = await corporateApi.checkUserExistance(
          checkUserExistanceDto(
            `${employeeTemp["code"]}${employeeTemp["phone_no"]}`,
            corporate_data
          )
        );
        if (existanceRes) {
          let userData = existanceRes?.user_name?.split(" ");
          actions.changeFirstName(userData[0], data["employee_index"]);
          actions.changeLastName(userData[1], data["employee_index"]);
          actions.changeLastName(userData?.user_email, data["employee_index"]);
        }
        next(actions.setLoading(false));
      }
    }
    isValid = validateEmployeeForm(data["new_employees"]);
    next(actions.setFormValidation(isValid));
  } else if (action.type == typeActions.TOGGLE_USER_STATUS_INITIATED) {
    next(actions.setLoading(true));
    await corporateApi.toggleEmployeeStatus(
      toggleEmployeeStatusDto(data, corporate_data)
    );
    var employees = await corporateApi.getEmployeesList(
      `${corporate_data["corporate_detail"]["token"]}`
    );
    next(actions.addFetchedEmployees(employees));
    next(actions.setLoading(false));
  }
};

function validateEmployeeForm(data) {
  var isValid = true;
  for (var i = 0; i < data.length; ++i) {
    isValid =
      validationUtils.validatePhone(
        data[i]["phone_no"],
        `${data[i]["code"]}`
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
