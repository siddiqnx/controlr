import { authFetch } from "utils/fetch";

export const createSchedule = async (data) => {
  const fetch = authFetch();
  const buildingId = localStorage.getItem('currentBuilding');
  const response = await fetch.post(`buildings/${buildingId}/schedules/`, data);
  return response.data;
}