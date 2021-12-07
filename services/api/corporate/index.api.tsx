import axios from "axios";
import corporateEndPoint from "./index.endpoints";
import message from "../../../utils/message";
const timeout = 10000;

export async function fetchOverview(fetchOverviewDto) {
  try {
    const res = await axios.post(
      corporateEndPoint.fetchOverview,
      fetchOverviewDto,
      {
        timeout,
      }
    );
    if (res?.data?.flag !== 143 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return res?.data?.data
  } catch (e) {
    message.error(e.message);
    return [];
  }
}

export async function submitCompanyData(data) {
  try {
    const res = await axios.post(
      corporateEndPoint.corporateGenerateLogin,
      data,
      { timeout }
    );
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
export async function submitCompanyAdminData(data) {
  try {
    return [];
    const { NEXT_PUBLIC_AGGREGATE_HOST } = process.env;
    const res = await axios.post(
      corporateEndPoint.corporateGenerateLogin,
      data,
      { timeout }
    );
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

export async function submitPhone(data) {
  try {
    const res = await axios.post(
      corporateEndPoint.corporateGenerateLogin,
      data,
      { timeout }
    );
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

export async function login(loginDto) {
  try {
    const res = await axios.post(corporateEndPoint.corporateLogin, loginDto, {
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
    return;
  }
}

export async function updateUserInfo(updateCorporateUserDto) {
  try {
    const res = await axios.post(
      corporateEndPoint.updateCorporateUser,
      updateCorporateUserDto,
      {
        timeout,
      }
    );
    if (res?.data?.flag !== 143 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return res?.data?.data
  } catch (e) {
    message.error(e.message);
    return;
  }
}

export async function getUserInfo(getCorporateUserDto) {
  try {
    const res = await axios.post(
      corporateEndPoint.getCorporateUserInfo,
      getCorporateUserDto,
      {
        timeout,
      }
    );
    if (res?.data?.flag !== 143 || res?.data?.error)
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return res?.data?.data
  } catch (e) {
    message.error(e.message);
    return;
  }
}
