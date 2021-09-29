import * as actions from "../../../actions/booking";
import { loadVehicleTypes } from "../common";
import { showError, showTimeOut, showInfo } from "../../common";
import { showMessage } from "../../../actions/navigation";

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
      if (e?.message?.includes("timeout")) showTimeOut(next);
      else if (e?.flag == 101) showInfo(next, "The user couldn't be verified. Please login and try again.", "error");
      else showError(next);
      next(actions.loadVehicles(false));
    }
    next(actions.loadVehicles(false));
  }
}
