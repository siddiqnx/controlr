import { authFetch } from "utils/fetch";

export const createTimer = async (data) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding');
  const response = await fetch.post(`buildings/${buildingId}/timers/`, data);
  return response.data;
}