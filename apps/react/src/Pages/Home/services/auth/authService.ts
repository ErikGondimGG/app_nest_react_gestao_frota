import axios from 'axios';
import { Login } from '../../../../Types/User';

export const login = async (
  email: string,
  password: string
): Promise<Login> => {
  // console.log(import.meta.env.VITE_API_URL);

  const url = `${import.meta.env.VITE_API_URL}/auth/login`;

  const response = await axios.post(url, { email, password });

  console.log(response.data);

  return response.data;
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
