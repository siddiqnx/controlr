import { authFetch } from "utils/fetch";

export const fetchTimerList = async (key, { deviceId }) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding');
  let requestString = `buildings/${buildingId}/timers/`;

  if (deviceId)
    requestString += `?device=${deviceId}`;
  const response = await fetch.get(requestString);
  return response.data;
}