import axios from "axios";

export async function fetchVehicles(body) {
  try {
    const { NEXT_PUBLIC_AGGREGATE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_AGGREGATE_HOST}/ride/available-vehicles`,
      body,
      { timeout: 5000 }
    );
    return res.data;
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
