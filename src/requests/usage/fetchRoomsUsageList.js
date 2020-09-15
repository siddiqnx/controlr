import { authFetch } from 'utils/fetch';

export const fetchRoomsUsageList = async ({ roomIds, startTs, endTs }) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  let requestData = {
    start_ts: startTs,
    end_ts: endTs,
  }
  if (roomIds)
    requestData = { ...requestData, room_ids: roomIds }

  const response = await fetch.post(`buildings/${buildingId}/usage/rooms/list/`, requestData);
  return response.data;
}