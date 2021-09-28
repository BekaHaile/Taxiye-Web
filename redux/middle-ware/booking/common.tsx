import axios from "axios";

export async function fetchVehicles(data, access_token) {
  try {
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_TAXIYE_HOST}/v2/customer/find_a_driver`,
      {
        access_token:
          access_token !== ""
            ? access_token
            : `${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        latitude: data["origin"]["location"]["lat"],
        longitude: data["origin"]["location"]["lng"],
        op_drop_latitude: data["destination"]["location"]["lat"],
        op_drop_longitude: data["destination"]["location"]["lat"],
        show_all: 0,
        show_region_specific_fare: 1,
        operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
        ride_type: 1,
      },
      { timeout: 20000 }
    );
    return res.data;
  } catch (e) {
    throw e;
    return null;
  }
}

export async function loadVehicleTypes(data, next, actions, access_token) {
  let res = await fetchVehicles(data, access_token);
  console.log(res);
  console.log(res.drivers);
  var regions = res.regions;
  var drivers = res.drivers;
  var fares = res.fare_structure;
  var supportedServices = res.services.find((service) => {
    return service.type === data["type"];
  });
  var supportedRides = supportedServices?.supported_ride_type;
  var supportedServices = res.services.find((service) => {
    return service.type === data["type"];
  });
  var selectedRegions;
  if (supportedRides)
    selectedRegions = regions.filter((region) => {
      return supportedRides.indexOf(region.ride_type) !== -1;
    });
  else selectedRegions = regions;
  var vehicleLists = selectedRegions.map((element) => {
    var found = fares.findIndex(
      (item) => item.vehicle_type == element.vehicle_type
    );
    if (found !== -1) return { ...element, ...fares[found] };
    return element;
  });
  console.log(vehicleLists);
  next(
    actions.addVehicles(
      res.city_id ? res.city_id : "",
      res.currency,
      drivers,
      Array.from(vehicleLists)
    )
  );
  next(actions.validateInput(true));
}

export async function fetchFare(data, access_token) {
  try {
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_TAXIYE_HOST}/get_fare_estimate`,
      {
        operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
        ride_distance: data["vehicle"]["distance"],
        region_id: data["vehicle"]["region_id"],
        vehicle_type: data["vehicle"]["vehicle_type"],
        access_token: access_token,
        start_longitude: data["origin"]["location"]["lng"],
        start_latitude: data["origin"]["location"]["lat"],
        drop_latitude: data["destination"]["location"]["lat"],
        ride_time: data["time"],
        drop_longitude: data["destination"]["location"]["lng"],
        app_version: "6007",
        login_type: "0",
        is_pooled: "0",
        device_type: "0",
        locale: "en",
        ride_type: "0",
        customer_package_name: "com.taxiye",
      },
      { timeout: 10000 }
    );
    return res.data;
  } catch (e) {
    throw e;
    return null;
  }
}

export async function requestDriver(data, access_token) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_TAXIYE_HOST}/request_ride`,
      {
        operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
        app_version: "6007",
        current_longitude: data["origin"]["location"]["lng"],
        login_type: "0",
        latitude: data["origin"]["location"]["lat"],
        device_type: "0",
        driver_fare_factor: "1.0",
        locale: "en",
        preferred_payment_mode: "1",
        pickup_location_address: data["origin"]["address"],
        reverse_bid: "0",
        location_accuracy: "3.075",
        duplicate_flag: "0",
        op_drop_longitude: data["destination"]["location"]["lng"],
        longitude: data["origin"]["location"]["lng"],
        drop_location_address: data["destination"]["address"],
        coupon_to_apply: "-1",
        region_id: data["vehicle"]["region_id"],
        is_bluetooth_tracker: "0",
        vehicle_type: data["vehicle"]["vehicle_type"],
        op_drop_latitude: data["destination"]["location"]["lat"],
        access_token: access_token,
        customer_package_name: "com.taxiye",
        customer_fare_factor: "1.0",
        current_latitude: data["origin"]["location"]["lat"],
        master_coupon: "0",
        multiple_destinations: "[]",
      },

      { timeout: 100000 }
    );
    return res.data;
  } catch (e) {
    throw e;
    return null;
  }
}

export async function cancelRide(data, access_token) {
  try {
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_TAXIYE_HOST}/cancel_ride_by_customer`,
      {
        access_token: access_token,
        reasons: "Driver+denied+duty",
        operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
        login_type: 0,
        device_type: 0,
        addn_reason: data["reason"],
        locale: "en",
      },
      { timeout: 10000 }
    );
    return res.data;
  } catch (e) {
    throw e;
    return null;
  }
}

export async function cancelRideRequest(data, access_token) {
  console.log(data["request_info"]);
  try {
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_TAXIYE_HOST}/cancel_the_request`,
      {
        access_token: access_token,
        customer_package_name: "com.taxiye",
        operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
        app_version: "6007",
        login_type: "0",
        session_id: data["request_info"]["session_id"],
        device_type: "0",
        locale: "en",
      },
      { timeout: 10000 }
    );
    return res.data;
  } catch (e) {
    throw e;
    return null;
  }
}

export function fetchListOfVehicles(drivers, params) {
  var selectedDrivers = drivers.filter((driver) => {
    return driver.region_ids.indexOf(params.region_id) !== -1;
  });
  return selectedDrivers;
}

export async function fetchPaymentMethods() {
  try {
    return [{ name: "Cash", value: 1 }];
  } catch (e) {
    throw e;
    return null;
  }
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
