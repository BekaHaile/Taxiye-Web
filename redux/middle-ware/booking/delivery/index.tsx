import * as actions from "../../../actions/booking";
import { loadVehicleTypes } from "../common";
import { showError, showTimeOut } from "../../common";

export async function getDeliveryVehicleInfo(data, next) {
  if (
    data["origin"].location !== null &&
    data["destination"].location !== null &&
    data["date"] !== null &&
    data["time"] !== null
  ) {
    next(actions.loadVehicles(true));
    try {
      await loadVehicleTypes(data, next, actions);
    } catch (e) {
      console.log(e);
      if (e.message.includes("timeout")) showTimeOut(next);
      else showError(next);
      next(actions.loadVehicles(false));
    }
    next(actions.loadVehicles(false));
  }
}

export async function uploadFile(data, next) {
  next(actions.loadVehicles(true));
  try {
    await sleep(2000);
    next(actions.addDeliveryItemImages(data["delivery"]["image"]));
  } catch (e) {
    showError(next);
    next(actions.loadVehicles(false));
  }

  next(actions.loadVehicles(false));
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
