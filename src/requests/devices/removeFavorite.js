import { authFetch } from "utils/fetch";

export const removeFavorite = async ({ deviceId }) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.delete(
    `buildings/${buildingId}/devices/${deviceId}/favorite/`,
  );
  return response.data;
}