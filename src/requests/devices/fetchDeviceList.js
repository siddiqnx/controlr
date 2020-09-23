import { authFetch } from "utils/fetch";

export const fetchDeviceList = async () => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.get(`buildings/${buildingId}/devices/`);
  return response.data;
}