import { authFetch } from "utils/fetch";

export const fetchGroups = async () => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.get(`buildings/${buildingId}/groups/`);
  return response.data;
}