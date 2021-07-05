import axios from "axios";

export async function fetchVehicles(body) {
  try {
    const { NEXT_PUBLIC_AGGREGATE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_AGGREGATE_HOST}/ride/available-vehicles`,
      body,
      { timeout: 10000 }
    );
    return res.data;
  } catch (e) {
    throw e;
    return null;
  }
}

export async function fetchListOfVehicles(params, city) {
  try {
    const res = await axios.get(
      `https://staging.taxiye.com:8009/get_drivers_by_vehicle_type?token=4c57714e6527c811ddecf3d49da65487dbfe4a7659d174a0cd347bdbfbe6ca96&city_id=336&status=0&vehicle_type=13&region_id=13`,
      
      { timeout: 5000 }

    );
    return res.data.data;
  } catch (e) {
    throw e;
    return null;
  }
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
