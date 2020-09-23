import { authFetch } from "utils/fetch";

export const createGroup = async (data) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.post(`buildings/${buildingId}/groups/`, data);
  return response.data;
}