import { authFetch } from "utils/fetch";

export const fetchBuildingList = async () => {
  const fetch = authFetch();
  const response = await fetch.get('buildings/');
  return response.data;
}