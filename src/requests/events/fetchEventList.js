import { authFetch } from "utils/fetch";

export const fetchEventList = async () => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.get(`buildings/${buildingId}/events/`);
  return response.data;
}