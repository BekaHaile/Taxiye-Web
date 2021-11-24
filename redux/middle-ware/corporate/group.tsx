import * as actions from "../../actions/corporate/group";
import * as actiontypes from "../../types/corporate/group";
import axios from "axios";
import { showSuccess, showInfo, showError } from "../common";

export const corporate_group = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().corporate_group;
  let corporate_data = store.getState().corporate;
  if (action.type == actiontypes.FETCH_GROUP_INITIATED) {
    next(actions.setLoading(true));
    var groups = await fetchGroups(corporate_data, data["query"]);
    next(actions.setGroupData(groups));
  } else if (action.type == actiontypes.INITIATED_ADD_GROUP) {
    next(actions.setLoading(true));
    var res = await addGroup(data, corporate_data, next);
    if (res) next(actions.addGroupFinished());
    else next(actions.setLoading(false));
  } else if (action.type == actiontypes.INITIATE_UPDATE_GROUP_API) {
    next(actions.setLoading(true));
    var res = await updateGroup(data, corporate_data, next);
    if (res) next(actions.updateGroupFinished());
    else next(actions.setLoading(false));
  } else if (
    action.type == actiontypes.GROUP_NAME_ADDED ||
    action.type == actiontypes.MONTHLY_BUDGET_ADDED ||
    action.type == actiontypes.MONTHLY_RIDE_ADDED ||
    action.type == actiontypes.PAYMENT_MODE_SELECTED ||
    action.type == actiontypes.DAYS_SELECTED ||
    action.type == actiontypes.TIME_RANGE_ADDED ||
    action.type == actiontypes.VEHICLE_SELECTION_MADE ||
    action.type == actiontypes.NUMBER_OF_MEMBERS_ADDED ||
    action.type == actiontypes.VEHICLE_REMOVED
  ) {
    next(actions.setValidation(validateForm(data)));
  } else if (action.type == actiontypes.RESET) {
    next(actions.changeRoute(""));
  }
};

export async function fetchGroups(corporate_data, query) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/fetch_groups`,
      {
        params: {
          token: `${corporate_data["corporate_detail"]["token"]}`,
          filter: {
            group_name: query ?? "",
          },
        },
        timeout: 10000,
      }
    );
    if (res.data.flag !== 143 || res.data.error)
      throw new Error(res.data.error);
    return res.data.data;
  } catch (e) {
    return [];
  }
}

export async function addGroup(group_data, corporate_data, next) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/add_group`,
      {
        token: `${corporate_data["corporate_detail"]["token"]}`,
        group_name: group_data["group_name"],
        monthly_budget_limit: group_data["monthly_budget"],
        monthly_ride_limit: group_data["monthly_ride"],
        max_members: group_data["max_members"],
        vehicle_type: `${group_data["selected_vehicle"]}`,
        corporate_id: parseInt(
          `${corporate_data["corporate_detail"]["business_details"]["business_id"]}`
        ),
      },
      {
        timeout: 10000,
      }
    );
    if (res.data.flag !== 143 || res.data.error)
      throw new Error(res.data.error);
    return res.data;
  } catch (e) {
    showInfo(next, "Could not add group, please try again!", "error");
    return;
  }
}

export async function updateGroup(group_data, corporate_data, next) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/update_group`,
      {
        token: `${corporate_data["corporate_detail"]["token"]}`,
        group_id: group_data["group_id"],
        group_name: group_data["group_name"],
        monthly_budget_limit: group_data["monthly_budget"],
        monthly_ride_limit: group_data["monthly_ride"],
        max_members: group_data["max_members"],
        vehicle_type: `${group_data["selected_vehicle"]}`,
        corporate_id: parseInt(
          `${corporate_data["corporate_detail"]["business_details"]["business_id"]}`
        ),
      },
      {
        timeout: 10000,
      }
    );
    if (res.data.flag !== 143 || res.data.error)
      throw new Error(res.data.error);
    return res.data;
  } catch (e) {
    showInfo(
      next,
      "Could not update group, please try again! " + e.message,
      "error"
    );
    return;
  }
}

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
