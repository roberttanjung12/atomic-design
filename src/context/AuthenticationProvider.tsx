'use client';

import { createContext, useReducer, useEffect, useCallback, useContext, useMemo, type ReactNode } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'administrator' | 'user';
  title: string;
}

interface AuthenticationState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error?: string;
}

interface LoginCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface AuthenticationContextType {
  error: string | undefined;
  isAuthenticated: boolean;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  user: User | null;
}

interface AuthenticationProviderProps {
  children: ReactNode;
}

const initialState: AuthenticationState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: undefined
};

function authenticationReducer(state: AuthenticationState, action: any): AuthenticationState {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: undefined };
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, isAuthenticated: true, loading: false, error: undefined };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, user: null, isAuthenticated: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false, loading: false, error: undefined };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const AuthenticationContext = createContext<AuthenticationContextType | null>(null);

export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  const [state, dispatch] = useReducer(authenticationReducer, initialState);

  const router = useRouter();

  const logout = useCallback(() => {
    Cookies.remove('DRONT_SESSION');
    Cookies.remove('DRONT_TOKEN');
    localStorage.removeItem('dront');
    dispatch({ type: 'LOGOUT' });

    router.push('/login');
  }, [router]);

  const login = useCallback(
    async (credentials: LoginCredentials): Promise<void> => {
      const { email, password, rememberMe } = credentials;

      dispatch({ type: 'LOGIN_START' });

      try {
        if (email === 'davidrivaldy@gmail.com' && password === 'administrator') {
          const user: User = {
            id: 1,
            name: 'David Rivaldy',
            email: 'davidrivaldy@gmail.com',
            role: 'administrator',
            title: 'Head of Front End Engineer'
          };

          setTimeout(() => dispatch({ type: 'LOGIN_SUCCESS', payload: user }), 1000);

          localStorage.setItem('dront', JSON.stringify(user));

          const expires = rememberMe ? 30 : 1;

          Cookies.set('DRONT_SESSION', 'DRONTSESSION', { expires, secure: true });
          Cookies.set('DRONT_TOKEN', 'DRONTTOKEN', { expires, secure: true });

          router.push('/dashboard/overview');
        } else {
          dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid credentials' });

          throw new Error('Invalid credentials');
        }
      } catch (error) {
        console.error(error);
      }
    },
    [router]
  );

  const checkTokenExpiration = useCallback(() => {
    const token = Cookies.get('DRONT_TOKEN');

    if (!token) {
      logout();
    }
  }, [logout]);

  useEffect(() => {
    const token = Cookies.get('DRONT_TOKEN');
    const user = JSON.parse(localStorage.getItem('dront') ?? 'null');

    if (token && user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });

      checkTokenExpiration();
    } else {
      logout();
    }
  }, [logout, checkTokenExpiration]);

  const value = useMemo(
    () => ({
      error: state.error,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      login,
      logout,
      user: state.user
    }),
    [state, login, logout]
  );

  return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>;
};

export const useAuthentication = (): AuthenticationContextType => {
  const context = useContext(AuthenticationContext);

  if (!context) throw new Error('useAuthentication must be used within an AuthenticationProvider');

  return context;
};
