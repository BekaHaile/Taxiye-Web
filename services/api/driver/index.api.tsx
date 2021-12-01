import axios from "axios";
import driverEndPoint from "./index.endpoints";
import message from "../../../utils/message";
const timeout = 10000;
export async function submitPhone(data) {
  try {
    const res = await axios.post(driverEndPoint.loginDriver, data, {
      timeout,
    });
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

export async function submitOtp(data) {
  try {
    const res = await axios.post(driverEndPoint.submitOtp, data, {
      timeout,
    });
    if (
      (res?.data?.flag !== 407 && res?.data?.flag !== 701) ||
      res?.data?.error
    )
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
export async function fetchRequiredDocuments(data) {
  try {
    const res = await axios.post(driverEndPoint.fetchRequiredDocuments, data, {
      timeout,
    });
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

export async function getDriverSignupDetails(data) {
  try {
    const res = await axios.post(driverEndPoint.fetchDriverDetail, data, {
      timeout,
    });
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

export async function uploadImage(data, next) {
  try {
    var i = 1;
    while (i < 100) {
      await sleep(1000);
      i += i * Math.random() * 5;
      //next(actions.changeProgress(Math.floor(i)));
    }
    return { id: "1", frontId: "1", backId: "2" };
    const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_TAXIYE_HOST}/account/generate_login_otp`,
      data,
      { timeout: 5000 }
    );
    return res.data;
  } catch (e) {
    message.error(e.message);
    return null;
  }
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
