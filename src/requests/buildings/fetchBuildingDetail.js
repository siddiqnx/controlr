import { authFetch } from "utils/fetch";

export const fetchBuildingDetail = async () => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.get(`buildings/${buildingId}/`);
  return response.data;
}