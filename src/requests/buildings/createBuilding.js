import { authFetch } from "utils/fetch";

export const createBuilding = async (data) => {
  const fetch = authFetch();
  const response = await fetch.post(`buildings/`, data);
  return response.data;
}