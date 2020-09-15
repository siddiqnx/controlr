import { authFetch } from "utils/fetch";

export const fetchBuildingCurrentStats = async () => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.get(`buildings/${buildingId}/current_stats/`);
  return response.data;
}