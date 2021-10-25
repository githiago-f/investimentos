import { UsuarioResponseDTO } from '@domain/user';
import { createContext, useEffect, useState } from 'react';

export const AuthenticationContext = createContext({} as { user?: UsuarioResponseDTO });

export const useAuthenticationHooks = () => {
  const [user, setUser] = useState({} as UsuarioResponseDTO);

  useEffect(() => {
    const jsonUser = localStorage.getItem('investimentos@user');
    const user = jsonUser === null ? null : JSON.parse(jsonUser || '{}');
    setUser(user);
    if(user && window.location.pathname !== '/investimentos/dashboard') {
      window.location.href = '/investimentos/dashboard';
    }
  }, []);

  return {
    user
  };
};
