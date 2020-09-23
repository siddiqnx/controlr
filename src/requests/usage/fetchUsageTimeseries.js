import { authFetch } from 'utils/fetch';

export const fetchUsageTimeseries = async ({ deviceIds, roomId, groupId, frequency, startTs, endTs }) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding');
  let requestData = {
    start_ts: startTs,
    end_ts: endTs,
    frequency
  };

  if (deviceIds) {
    requestData = { ...requestData, device_ids: deviceIds };
  } else if (roomId) {
    requestData = { ...requestData, room_id: roomId };
  } else if (groupId) {
    requestData = { ...requestData, group_id: groupId };
  }

  const response = await fetch.post(`buildings/${buildingId}/usage/devices/timeseries/`, requestData);
  return response.data;
}