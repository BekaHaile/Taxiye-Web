import axios from "axios";
import driverEndPoint from "./index.endpoints";
import message from "../../../utils/message";
import * as actions from "../../../redux/actions/driver";
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

export async function uploadImage(form, next) {
  try {
    const res = await axios.post(driverEndPoint.uploadFile, form, {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        const percentage = Math.floor((loaded * 100) / total);
        next(actions.changeProgress(percentage));
      },
      timeout,
    });

    if (res?.data?.flag !== 143 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return true;
  } catch (e) {
    message.error(e.message);
    return false;
  }
}

export async function updateDriverData(driverFormDataDto) {
  try {
    const res = await axios.post(
      driverEndPoint.updateDriverData,
      driverFormDataDto,
      {
        timeout,
      }
    );

    if (res?.data?.flag !== 143 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return true;
  } catch (e) {
    message.error(e.message);
    return false;
  }
}
