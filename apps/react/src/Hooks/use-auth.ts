import { apiUrl } from '@/constants/urls';
import { AuthState } from '@/stores/auth.store';
import axios from 'axios';
import { useState } from 'react';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (
    email: string,
    password: string,
    { auth }: AuthState
  ) => {
    setLoading(true);
    setError(null);

    try {
      const url = `${apiUrl}/auth/login`;
      const response = await axios.post(url, { email, password });

      if (!response.data.token) {
        setError(response.data.message);
        alert(response.data.message);
        return;
      }

      const { accessToken } = response.data.token;

      const user = {
        name: null,
        email: email,
      };

      auth.setUser(user);
      auth.setAccessToken(accessToken);

      alert(response.data.message);
      window.location.href = '/veiculos/dashboard';
    } catch (err) {
      setError((err as any).message);
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const url = `${apiUrl}/auth/register`;
      const response = await axios.post(url, { name, email, password });

      console.log(response.data);
      return response.data;
    } catch (err) {
      setError((err as any).message);
    } finally {
      setLoading(false);
    }
  };

  return { login, register, loading, error };
};
