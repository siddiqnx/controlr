import { authFetch } from "utils/fetch";

export const fetchScheduleList = async (key, { deviceId }) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding');
  let requestString = `buildings/${buildingId}/schedules/`;
  if (deviceId)
    requestString += `?device=${deviceId}`
  const response = await fetch.get(requestString);
  return response.data;
}