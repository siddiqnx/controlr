import { authFetch } from 'utils/fetch';

export const fetchRecentUsage = async ({ deviceIds, roomId, groupId, durations }) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding');
  let requestData = {
    durations
  };

  if (deviceIds) {
    requestData = { ...requestData, device_ids: deviceIds };
  } else if (roomId) {
    requestData = { ...requestData, room_id: roomId };
  } else if (groupId) {
    requestData = { ...requestData, group_id: groupId };
  }

  const response = await fetch.post(`buildings/${buildingId}/usage/recent/`, requestData);
  return response.data;
}