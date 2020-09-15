import { authFetch } from "utils/fetch";

export const fetchUserInfo = async () => {
  const fetch = authFetch();
  const response = await fetch.get('auth/user/');
  return response.data;
}