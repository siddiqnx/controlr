import { authFetch } from "utils/fetch";

export const updateDeviceState = async ({ deviceId, state_change }) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.put(
    `buildings/${buildingId}/devices/${deviceId}/switch/`,
    {
      state_change: state_change
    }
  );
  return response.data;
}