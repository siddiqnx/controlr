import { authFetch } from "utils/fetch";

export const updateScheduleState = async ({ scheduleId, state_change }) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding')
  const response = await fetch.put(`buildings/${buildingId}/schedules/${scheduleId}/switch/`, {
    state_change
  });
  return response.data;
}