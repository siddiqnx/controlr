import { authFetch } from "utils/fetch";

export const fetchRoomCurrentStats = async (key, roomId) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.get(`buildings/${buildingId}/rooms/${roomId}/current_stats/`);
  return response.data;
}