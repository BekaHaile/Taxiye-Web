import axios from "axios";
import corporateEndPoint from "../index.endpoints";
import message from "../../../../utils/message";
const timeout = 10000;

export async function fetchRequests(fetchRequestsDto) {
  try {
    const res = await axios.get(corporateEndPoint.getRequests, {
      params: fetchRequestsDto,
      timeout,
    });
    if (res?.data?.flag !== 143 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return res.data.data;
  } catch (e) {
    message.error(e.message);
    return [];
  }
}

export async function createRequest(addRequestDto) {
  try {
    const res = await axios.post(
      corporateEndPoint.createRequests,
      addRequestDto,
      {
        timeout,
      }
    );
    if (res?.data?.flag !== 143 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }

    return res.data.data;
  } catch (e) {
    message.error(e.message);
    return [];
  }
}

export async function cancelRequest(cancelRequestDto) {
  try {
    const res = await axios.post(
      corporateEndPoint.cancelRequests,
      cancelRequestDto,
      {
        timeout,
      }
    );
    if (res?.data?.flag !== 143 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return res.data.data;
  } catch (e) {
    message.error(e.message);
    return [];
  }
}
