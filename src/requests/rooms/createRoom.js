import { authFetch } from "utils/fetch";

export const createRoom = async ({ data }) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.post(`buildings/${buildingId}/rooms/`, data);
  return response.data;
}