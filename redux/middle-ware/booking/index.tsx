import * as actions from "../../actions/booking";
import * as navigationActions from "../../actions/navigation";
import { showSuccess, showInfo, showError } from "../common";
import { fetchPaymentMethods, fetchListOfVehicles } from "./common";
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
    if (data["type"] == "on-demand") {
      await getOnDemandVehicleInfo(data, next);
    } else if (data["type"] == "rental") {
      await getRentalVehicleInfo(data, next);
    } else if (data["type"] == "out-station") {
      await getOutStationVehicleInfo(data, next);
    } else if (data["type"] == "delivery") {
      await getDeliveryVehicleInfo(data, next);
    }
  } else if (action.type == "VEHICLE_SELECTED") {
    try {
      next(actions.loadingAvailbleVehicles(true));

      var res = await fetchListOfVehicles(data["vehicle"], data["city"]);
      next(actions.loadingAvailbleVehicles(false));
      if (res != null) {
        if (res.length <= 0) {
          return;
        }
        next(actions.addAvailableVehicles(res));
        if (data["type"] == "delivery") {
          if (
            data["delivery"]["comment"] == null ||
            data["delivery"]["comment"] == ""
          )
            showInfo(
              next,
              "Please tell us what you need to be deliverd!",
              "warning"
            );
          else next(navigationActions.goTo("info"));
        } else if (data["userData"]) next(navigationActions.goTo("confirm"));
        else {
          next(navigationActions.goTo("login"));
          next(actions.setStep(1));
        }
      }
    } catch (e) {
      showError(next);
    }
  } else if (action.type == "DELIVERY_SELECTED") {
    if (data["userData"]) next(navigationActions.goTo("confirm"));
    else {
      next(navigationActions.goTo("login"));
      next(actions.setStep(1));
    }
  } else if (action.type == "DELIVERY_IMAGES_UPLOADED") {
    await uploadFile(data, next);
  } else if (action.type == "OTP_SUBMITTED") {
    data["userData"]
      ? next(navigationActions.goTo("confirm"))
      : next(navigationActions.goTo("login"));
  } else if (action.type == "REQUEST_CONFIRMED") {
    next(navigationActions.goTo("approve"));
    await sleep(3000);
    next(
      actions.assignDriver({
        profile: "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
        firstName: "Girma",
        lastName: "Tefera",
        plateNumber: "AB12345",
        vehicleName: "Taxiye-Sedan",
        rating: 4.5,
        phoneNumber: "+251911399622",
        arrivingIn: "2 Mins",
      })
    );
  } else if (action.type == "HOUSE_NUMBER_ADDED") {
    if (data["house_number"] != null && data["house_number"] != "")
      next(actions.setIsAddressValid(true));
    else next(actions.setIsAddressValid(false));
  } else if (action.type == "TERMINATION_REASON_ADDED") {
    next(navigationActions.goTo(""));
    showSuccess(next);
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
