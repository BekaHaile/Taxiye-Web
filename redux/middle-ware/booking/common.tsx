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
      { timeout: 10000 }
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
  return data["drivers"][0];
  try {
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `http://localhost:2002/cancel_ride_by_customer`,
      {
        access_token:
          "e06c12e1a576b9571567213327c93fa83768efa73d532514e800d3184e119999",
        reasons: data["reason"],
        operator_token: "8fa23305501d87e9b87ecac6a87d381b",
        login_type: 0,
      },
      { timeout: 10000 }
    );
    return res.data;
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
          "e06c12e1a576b9571567213327c93fa83768efa73d532514e800d3184e119999",
        reasons: data["reason"],
        operator_token: "8fa23305501d87e9b87ecac6a87d381b",
        login_type: 0,
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
    await sleep(3000);
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
