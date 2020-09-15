import { authFetch } from "utils/fetch";

export const fetchRoomDetail = async (key, roomId) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.get(`buildings/${buildingId}/rooms/${roomId}/`);
  return response.data;
}