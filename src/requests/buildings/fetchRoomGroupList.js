import { authFetch } from "utils/fetch";

export const fetchRoomGroupList = async () => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.get(`buildings/${buildingId}/room_groups/`);
  return response.data;
}