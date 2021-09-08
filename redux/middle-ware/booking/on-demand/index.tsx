import * as actions from "../../../actions/booking";
import { loadVehicleTypes } from "../common";
import { showError, showTimeOut } from "../../common";

export async function getOnDemandVehicleInfo(data, next, access_token) {
  if (
    data["origin"].location !== null &&
    data["destination"].location !== null &&
    data["date"] !== null &&
    data["time"] !== null
  ) {
    next(actions.loadVehicles(true));
    try {
      await loadVehicleTypes(data, next, actions, access_token);
    } catch (e) {
      console.log(e);
      if (e.message.includes("timeout")) showTimeOut(next);
      else showError(next);
      next(actions.loadVehicles(false));
    }
    next(actions.loadVehicles(false));
  }
}
