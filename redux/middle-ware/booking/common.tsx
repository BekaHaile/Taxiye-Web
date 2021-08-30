import axios from "axios";

export async function fetchVehicles(data) {
  try {
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `http://localhost:2002/v2/customer/find_a_driver`,
      {
        access_token:
          "e06c12e1a576b9571567213327c93fa83768efa73d532514e800d3184e119999",
        latitude: data["origin"]["location"]["lat"],
        longitude: data["origin"]["location"]["lng"],
        op_drop_latitude: data["destination"]["location"]["lat"],
        op_drop_longitude: data["destination"]["location"]["lat"],
        show_all: 0,
        show_region_specific_fare: 1,
        operator_token: "8fa23305501d87e9b87ecac6a87d381b",
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

export async function fetchFare(data) {
  try {
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `http://localhost:2002/get_fare_estimate`,
      {
        operator_token: "8fa23305501d87e9b87ecac6a87d381b",
        ride_distance: data["vehicle"]["distance"],
        region_id: data["vehicle"]["region_id"],
        vehicle_type: data["vehicle"]["vehicle_type"],
        access_token:
          "e06c12e1a576b9571567213327c93fa83768efa73d532514e800d3184e119999",
        start_longitude: data["origin"]["location"]["lng"],
        start_latitude: data["origin"]["location"]["lat"],
        drop_latitude: data["destination"]["location"]["lat"],
        ride_time: data["time"],
        drop_longitude: data["destination"]["location"]["lng"],
      },
      { timeout: 10000 }
    );
    return res.data;
  } catch (e) {
    throw e;
    return null;
  }
}

export async function requestDriver(data) {
  try {
    const { NEXT_PUBLIC_TAXIYE_CORPORATE_HOST } = process.env;
    const res = await axios.post(
      `http://localhost:2002/request_ride`,
      {
        operator_token: "8fa23305501d87e9b87ecac6a87d381b",
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
        access_token:
          "e06c12e1a576b9571567213327c93fa83768efa73d532514e800d3184e119999",
        customer_package_name: "com.taxiye",
        customer_fare_factor: "1.0",
        current_latitude: data["origin"]["location"]["lat"],
        master_coupon: "0",
        multiple_destinations: "[]",
      },
      
      { timeout: 100000 }
    );
    return data["drivers"][0];
  } catch (e) {
    throw e;
    return null;
  }
}

export async function cancelRide(data) {
  try {
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `http://localhost:2002/cancel_ride_by_customer`,
      {
        access_token:
          "b29abb7bd81c973838d2df62ee64c4ee6e79e684bab367823125f09200f766e3",
        reasons: "Driver+denied+duty",
        operator_token: "8fa23305501d87e9b87ecac6a87d381b",
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

export function fetchListOfVehicles(drivers, params) {
  var selectedDrivers = drivers.filter((driver) => {
    return driver.region_ids.indexOf(params.region_id) !== -1;
  });
  return selectedDrivers;
}

export async function fetchPaymentMethods() {
  try {
    await sleep(300);
    return [{ name: "Cash" }];
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
