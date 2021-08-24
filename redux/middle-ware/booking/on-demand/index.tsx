import * as actions from "../../../actions/booking";
import { fetchVehicles } from "../common";
import { showError, showTimeOut } from "../../common";

export async function getOnDemandVehicleInfo(data, next) {
  if (
    data["origin"].location !== null &&
    data["destination"].location !== null &&
    data["date"] !== null &&
    data["time"] !== null
  ) {
    next(actions.loadVehicles(true));
    try {
      let res = await fetchVehicles(data);
      console.log(res);
      console.log(res.drivers);
      var regions = res.regions;
      var drivers = res.drivers;
      var supportedServices = res.services.find(service => {
        return service.type === data["type"];
      });
      var supportedRides = supportedServices.supported_ride_type;
      var supportedServices = res.services.find(service => {
        return service.type === data["type"];
      });
      var selectedRegions = regions.filter(region => {
        return supportedRides.indexOf(region.ride_type) !== -1;
      });
      next(
        actions.addVehicles(res.city_id ? res.city_id : "",res.currency, drivers , Array.from(selectedRegions))
      );
      next(actions.validateInput(true));
    } catch (e) {
      console.log(e);
      if (e.message.includes("timeout")) showTimeOut(next);
      else showError(next);
      next(actions.loadVehicles(false));
    }
    next(actions.loadVehicles(false));
  }
}
