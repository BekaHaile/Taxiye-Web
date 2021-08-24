import * as actions from "../../actions/booking";
import * as navigationActions from "../../actions/navigation";
import * as actionTypes from "../../types/booking/index";
import { showSuccess, showInfo, showError } from "../common";
import { fetchPaymentMethods, fetchListOfVehicles, fetchFare, cancelRide, requestDriver } from "./common";
import { getOnDemandVehicleInfo } from "./on-demand";
import { getRentalVehicleInfo } from "./rental";
import { getOutStationVehicleInfo } from "./out-station";
import { getDeliveryVehicleInfo, uploadFile } from "./delivery";
export const booking = (store) => (next) => async (action) => {
  next(action);
  let data = store.getState().booking;

  if (
    action.type == "DESTINATION_SELECTED" ||
    action.type == "ORIGIN_SELECTED" ||
    action.type == "DATE_ADDED" ||
    action.type == "TIME_ADDED" ||
    action.type == "PACKAGE_SELECTED" ||
    action.type == "JOURNEY_TYPE_CHANGED" ||
    action.type == "JOURNEY_DATE_CHANGED" ||
    action.type == "JOURNEY_TIME_CHANGED" ||
    action.type == "BOOKING_TYPE_CHANGED"
  ) {
    if (data["type"] == "on_demand") {
      await getOnDemandVehicleInfo(data, next);
    } else if (data["type"] == "rental") {
      await getRentalVehicleInfo(data, next);
    } else if (data["type"] == "out-station") {
      await getOutStationVehicleInfo(data, next);
    } else if (data["type"] == "delivery") {
      await getDeliveryVehicleInfo(data, next);
    }
  } else if (action.type == "VEHICLE_SELECTED") {
    if (data["type"] == "delivery") {
      if (
        data["delivery"]["comment"] == null ||
        data["delivery"]["comment"] == ""
      ) {
        showInfo(
          next,
          "Please tell us what you need to be deliverd!",
          "warning"
        );
        return;
      }
    }
    try {
      next(actions.loadingAvailbleVehicles(true));

      var res = fetchListOfVehicles(data["drivers"], data["vehicle"]);
      console.log(res);
      next(actions.loadingAvailbleVehicles(false));
      if (res != null) {
        if (res.length <= 0) {
          next(actions.addAvailableVehicles([]));
          return;
        }
        next(actions.addAvailableVehicles(res));
        if (data["type"] == "delivery") {
          next(navigationActions.goTo("info"));
        } else if (data["userData"]) next(navigationActions.goTo("confirm"));
        else {
          //next(navigationActions.goTo("login"));
          next(navigationActions.goTo("confirm"));
          next(actions.setStep(1));
        }
      }
    } catch (e) {
      showError(next);
      next(actions.loadingAvailbleVehicles(false));
    }
  } else if (action.type == "DELIVERY_SELECTED") {
    if (data["userData"]) next(navigationActions.goTo("confirm"));
    else {
      next(navigationActions.goTo("login"));
      next(actions.setStep(1));
    }
  } else if (action.type == "DELIVERY_IMAGES_UPLOADED") {
    await uploadFile(data, next);
  } else if (action.type == actionTypes.FETCH_FARE_ESTIMATE_INITIATED) {
    try {
      next(actions.setFareEstimateLoading(true));
      var estimate = await fetchFare(data);
      next(actions.setFareEstimate(estimate));
      next(actions.setFareEstimateLoading(false));
    } catch (e) {
      next(actions.setFareEstimateLoading(false));
    }
  }
  // else if (action.type == "OTP_SUBMITTED") {
  //   data["userData"]
  //     ? next(navigationActions.goTo("confirm"))
  //     : next(navigationActions.goTo("login"));
  // }
  else if (action.type == "REQUEST_CONFIRMED") {
    next(navigationActions.goTo("approve"));
    await sleep(3000);
    var res = await requestDriver(data);
    next(
      actions.assignDriver(res)
    );
  } else if (action.type == "HOUSE_NUMBER_ADDED") {
    if (data["house_number"] != null && data["house_number"] != "")
      next(actions.setIsAddressValid(true));
    else next(actions.setIsAddressValid(false));
  } else if (action.type == "TERMINATION_REASON_ADDED") {
    var res = await cancelRide(data);
    showSuccess(next);
    next(navigationActions.goTo(""));
  } else if (action.type == "FETCH_PAYMENT_METHOD_CALLED") {
    next(actions.setPaymentMethodLoading(true));
    let payment_methods = await fetchPaymentMethods();
    next(actions.setPaymentMethods(payment_methods));
    next(actions.setPaymentMethodLoading(false));
  }
};

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
