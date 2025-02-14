import Cookies from 'js-cookie';
import { create } from 'zustand';

const ACCESS_TOKEN = 'token';

export interface AuthUser {
  name: string | null;
  email: string;
}

export interface AuthState {
  auth: {
    user: AuthUser | null;
    setUser: (user: AuthUser | null) => void;
    accessToken: string;
    setAccessToken: (accessToken: string) => void;
    resetAccessToken: () => void;
    reset: () => void;
  };
}

let initToken = '';
try {
  const cookieState = Cookies.get(ACCESS_TOKEN);
  initToken = cookieState ?? '';
} catch (error) {
  console.error('Invalid token format in cookies:', error);
  Cookies.remove(ACCESS_TOKEN);
}

export const useAuthStore = create<AuthState>()(set => ({
  auth: {
    user: null,

    setUser: user =>
      set(state => ({
        ...state,
        auth: { ...state.auth, user },
      })),

    accessToken: initToken,

    setAccessToken: accessToken =>
      set(state => {
        Cookies.set(ACCESS_TOKEN, JSON.stringify(accessToken), {
          secure: true,
          sameSite: 'Strict',
          expires: 24 * 60 * 60 * 1000,
        });
        return { ...state, auth: { ...state.auth, accessToken } };
      }),

    resetAccessToken: () =>
      set(state => {
        Cookies.remove(ACCESS_TOKEN);
        return { ...state, auth: { ...state.auth, accessToken: '' } };
      }),

    reset: () =>
      set(state => {
        state.auth.resetAccessToken();
        return { ...state, auth: { ...state.auth, user: null } };
      }),
  },
}));

export const useAuth = () => useAuthStore(state => state.auth);
