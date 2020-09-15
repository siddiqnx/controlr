import { authFetch } from 'utils/fetch';

export const fetchDevicesUsageList = async ({ deviceIds, roomId, groupId, startTs, endTs }) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  let requestData = {
    start_ts: startTs,
    end_ts: endTs,
  }

  if (deviceIds) {
    requestData = { ...requestData, device_ids: deviceIds };
  } else if (roomId) {
    requestData = { ...requestData, room_id: roomId };
  } else if (groupId) {
    requestData = { ...requestData, group_id: groupId };
  }

  const response = await fetch.post(`buildings/${buildingId}/usage/devices/list/`, requestData);
  return response.data;
}