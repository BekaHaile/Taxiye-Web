import axios from "axios";
import corporateEndPoint from "../index.endpoints";
import message from "../../../../utils/message";
const timeout = 10000;
export async function getEmployeesList(token) {
  try {
    const res = await axios.post(
      corporateEndPoint.getEmployees,
      {
        token,
      },
      { timeout }
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
export async function checkUserExistance(checkUserExistanceDto) {
  try {
    const res = await axios.post(
      corporateEndPoint.checkUserExistance,
      checkUserExistanceDto,
      { timeout }
    );
    if (
      (res?.data?.flag !== 144 &&
        res?.data?.flag !== 174 &&
        res?.data?.flag !== 143) ||
      res?.data?.error
    )
      throw new Error(res?.data?.error || res?.data?.message);
    else if (res?.data?.message) {
      message.success(res?.data?.message);
    }
    return res?.data?.data;
  } catch (e) {
    message.error(e.message);
    return null;
  }
}

export async function registerEmployees(registerEmployeeDto) {
  try {
    const res = await axios.post(
      corporateEndPoint.addEmployee,
      registerEmployeeDto,
      { timeout }
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

export async function toggleEmployeeStatus(toggleEmployeeStatusDto) {
  try {
    const res = await axios.post(
      corporateEndPoint.toggleEmployeeStatus,
      toggleEmployeeStatusDto,
      { timeout }
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
