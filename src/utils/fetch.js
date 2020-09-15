import axios from 'axios';

export const publicFetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const authFetch = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: `token ${token}`
    }
  })
}