import axios from 'axios';

export const login = async (email: string, password: string) => {
  // console.log(import.meta.env.VITE_API_URL);

  const url = `${import.meta.env.VITE_API_URL}/auth/login`;

  const response = await axios.post(url, { email, password });

  console.log(response.data);

  return response.data;
};
