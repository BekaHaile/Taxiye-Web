import axios from "axios";
import bookingEndPoint from "./index.endpoints";
import message from "../../../utils/message";
import * as actions from "../../../redux/actions/booking";
const timeout = 10000;

export async function fetchVehicles(findADriverDto) {
  try {
    const res = await axios.post(
      `${bookingEndPoint.findADriver}`,
      findADriverDto,
      { timeout }
    );
    if (res?.data?.flag !== 175 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function loadVehicleTypes(findADriverDto, next, type) {
  try {
    let res = await fetchVehicles(findADriverDto);
    let regions = res.regions;
    let drivers = res.drivers;
    let fares = res.fare_structure;
    let supportedServices = res.services.find((service) => {
      return service.type === type;
    });
    let supportedRides = supportedServices?.supported_ride_type;
    supportedServices = res.services.find((service) => service.type === type);
    let selectedRegions;
    if (supportedRides)
      selectedRegions = regions.filter((region) => {
        return supportedRides.indexOf(region.ride_type) !== -1;
      });
    else selectedRegions = regions;
    let vehicleLists = selectedRegions.map((element) => {
      let found = fares.findIndex(
        (item) => item.vehicle_type == element.vehicle_type
      );
      if (found !== -1) return { ...element, ...fares[found] };
      return element;
    });
    next(
      actions.addVehicles(
        res.city_id ? res.city_id : "",
        res.currency,
        drivers,
        Array.from(vehicleLists)
      )
    );
    next(actions.validateInput(true));
  } catch (e) {
    message.error(e.message);
    throw new Error(e.message);
  }
}

export async function fetchFare(fetchFareDto) {
  try {
    const res = await axios.post(
      `${bookingEndPoint.getFareEstimate}`,
      fetchFareDto,
      { timeout }
    );
    if (res?.data?.flag !== 143 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return res.data;
  } catch (e) {
    message.error(e.message);
    return null;
  }
}

export async function requestDriver(requestRideDto) {
  try {
    const res = await axios.post(
      `${bookingEndPoint.requestRide}`,
      requestRideDto,
      { timeout }
    );
    if (res?.data?.flag !== 143 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return res.data;
  } catch (e) {
    message.error(e.message);
    return null;
  }
}

export async function cancelRide(cancelRideByCustomerDto) {
  try {
    const res = await axios.post(
      `${bookingEndPoint.cancelRideByCustomer}`,
      cancelRideByCustomerDto,
      { timeout }
    );
    if (res?.data?.flag !== 143 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return res.data;
  } catch (e) {
    message.error(e.message);
    return null;
  }
}

export async function cancelRideRequest(cancelRequestDto) {
  try {
    const res = await axios.post(
      `${bookingEndPoint.cancelRequest}`,
      cancelRequestDto,
      { timeout }
    );
    if (res?.data?.flag !== 143 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return res.data;
  } catch (e) {
    message.error(e.message);
    return null;
  }
}

export function fetchListOfVehicles(drivers, params) {
  return drivers.filter(
    (driver) => driver.region_ids.indexOf(params.region_id) !== -1
  );
}

export async function fetchPaymentMethods() {
  return [{ name: "Cash", value: 1 }];
}
