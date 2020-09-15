import { authFetch } from "utils/fetch";

export const fetchRoomList = async () => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.get(`buildings/${buildingId}/rooms/`);
  return response.data;
}