import axios from "axios";
import corporateEndPoint from "../index.endpoints";
import message from "../../../../utils/message";
const timeout = 10000;

export async function fetchRides(fetchRidesDto) {
  try {
    const res = await axios.get(corporateEndPoint.getRides, {
      params: fetchRidesDto,
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
export async function fetchCities(fetchCitiesDto) {
  try {
    const res = await axios.get(corporateEndPoint.getCities, {
      params: fetchCitiesDto,
      timeout,
    });
    if (res?.data?.error) throw new Error(res?.data?.error);

    return res?.data?.data;
  } catch (e) {
    message.error();
    return [];
  }
}

export async function fetchRidesInfo(fetchRidesDto) {
  try {
    const res = await axios.get(corporateEndPoint.getRidesInfo, {
      params: fetchRidesDto,
      timeout,
    });
    if (res?.data?.flag !== 143 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return [];
  } catch (e) {
    message.error(e.message);
    return [];
  }
}