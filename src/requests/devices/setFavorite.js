import { authFetch } from "utils/fetch";

export const setFavorite = async ({ deviceId }) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.put(
    `buildings/${buildingId}/devices/${deviceId}/favorite/`,
  );
  return response.data;
}