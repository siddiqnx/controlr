import { authFetch } from "utils/fetch";

export const createDevice = async ({ data }) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.post(`buildings/${buildingId}/devices/`, data);
  return response.data;
}