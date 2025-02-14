import { AuthState } from '@/stores/auth.store';
import axios from 'axios';

export const login = async (
  email: string,
  password: string,
  { auth }: AuthState
) => {
  // console.log(import.meta.env.VITE_API_URL);

  const url = `${import.meta.env.VITE_API_URL}/auth/login`;

  const response = await axios.post(url, { email, password });

  console.log(response.data);

  const { accessToken } = response.data.token;

  if (!accessToken) {
    alert(response.data.message);
  }

  const user = {
    name: null,
    email: email,
  };

  auth.setUser(user);
  auth.setAccessToken(accessToken);

  window.location.href = '/dashboard';
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  // console.log(import.meta.env.VITE_API_URL);

  const url = `${import.meta.env.VITE_API_URL}/auth/register`;

  const response = await axios.post(url, { name, email, password });

  console.log(response.data);

  return response.data;
};
