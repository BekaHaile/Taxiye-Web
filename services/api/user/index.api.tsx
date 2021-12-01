import axios from "axios";
import userEndPoint from "./index.endpoints";
import message from "../../../utils/message";
const timeout = 10000;
export async function submitPhone(submitPhoneDto) {
  try {
    const res = await axios.post(userEndPoint.loginUser, submitPhoneDto, {
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

export async function submitOtp(submitOtpDto) {
  try {
    const res = await axios.post(userEndPoint.submitOtp, submitOtpDto, {
      timeout,
    });
    if (res?.data?.flag !== 407 || res?.data?.error)
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
