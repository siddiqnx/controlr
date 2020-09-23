import { authFetch } from "utils/fetch";

export const fetchGroupDetail = async (key, groupId) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.get(`buildings/${buildingId}/groups/${groupId}/`);
  return response.data;
}