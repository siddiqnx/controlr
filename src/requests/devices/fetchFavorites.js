import { authFetch } from "utils/fetch";

export const fetchFavorites = async () => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.get(`buildings/${buildingId}/devices/favorites/`);
  return response.data;
}