import * as actions from "../../actions/corporate/group";
import * as actionTypes from "../../types/corporate/group";
import * as groupApi from "../../../services/api/corporate/group/index.api";
import fetchGroupsDto from "../../../models/corporate/group/fetchGroupsDto";
import addGroupDto from "../../../models/corporate/group/addGroupDto";
import updateGroupDto from "../../../models/corporate/group/updateGroupDto";

export const corporate_group = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_group;
  let corporate_data = store.getState().corporate;
  if (action.type == actionTypes.FETCH_GROUP_INITIATED) {
    next(actions.setLoading(true));
    var groups = await groupApi.fetchGroups(fetchGroupsDto(corporate_data));
    next(actions.setGroupData(groups));
  } else if (action.type == actionTypes.INITIATED_ADD_GROUP) {
    next(actions.setLoading(true));
    var res = await groupApi.addGroup(addGroupDto(data, corporate_data));
    if (res) next(actions.addGroupFinished());
    else next(actions.setLoading(false));
  } else if (action.type == actionTypes.INITIATE_UPDATE_GROUP_API) {
    next(actions.setLoading(true));
    var res = await groupApi.updateGroup(
      updateGroupDto(data, corporate_data)
    );
    if (res) next(actions.updateGroupFinished());
    else next(actions.setLoading(false));
  } else if (
    action.type == actionTypes.GROUP_NAME_ADDED ||
    action.type == actionTypes.MONTHLY_BUDGET_ADDED ||
    action.type == actionTypes.MONTHLY_RIDE_ADDED ||
    action.type == actionTypes.PAYMENT_MODE_SELECTED ||
    action.type == actionTypes.DAYS_SELECTED ||
    action.type == actionTypes.TIME_RANGE_ADDED ||
    action.type == actionTypes.VEHICLE_SELECTION_MADE ||
    action.type == actionTypes.NUMBER_OF_MEMBERS_ADDED ||
    action.type == actionTypes.VEHICLE_REMOVED
  ) {
    next(actions.setValidation(validateForm(data)));
  } else if (action.type == actionTypes.RESET) {
    next(actions.changeRoute(""));
  }
};

function validateForm(data) {
  return (
    data["group_name"] != "" &&
    data["group_name"] != null &&
    data["monthly_budget"] != "" &&
    data["monthly_budget"] != null &&
    data["monthly_ride"] != "" &&
    data["monthly_ride"] != null &&
    data["max_members"] != null &&
    // data["max_members"] >= 1 &&
    data["days"].length > 0 &&
    // data["payment_mode"] != null &&
    data["time_range"] != null &&
    data["selected_vehicle"] != ""
  );
}
