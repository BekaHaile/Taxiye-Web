import axios from "axios";
import corporateEndPoint from "../index.endpoints";
import message from "../../../../utils/message";
const timeout = 10000;

export async function fetchGroups(fetchGroupsDto) {
  try {
    const res = await axios.get(corporateEndPoint.fetchGroups, {
      params: fetchGroupsDto,
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

export async function addGroup(addGroupDto) {
  try {
    const res = await axios.post(corporateEndPoint.addGroup, addGroupDto, {
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

export async function updateGroup(updateGroupDto) {
  try {
    const res = await axios.post(
      corporateEndPoint.updateGroup,
      updateGroupDto,
      {
        timeout,
      }
    );
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
