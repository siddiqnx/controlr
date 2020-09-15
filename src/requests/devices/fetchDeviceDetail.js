import { authFetch } from "utils/fetch";

export const fetchDeviceDetail = async (key, deviceId) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.get(`buildings/${buildingId}/devices/${deviceId}/`);
  return response.data;
}