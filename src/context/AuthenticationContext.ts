import { UsuarioResponseDTO } from '@domain';
import { createContext, useEffect, useState } from 'react';

export const AuthenticationContext = createContext({} as { user?: UsuarioResponseDTO });

export const useAuthenticationHooks = () => {
  const [user, setUser] = useState({} as UsuarioResponseDTO);

  useEffect(() => {
    const jsonUser = localStorage.getItem('investimentos@user');
    const user = JSON.parse(jsonUser || '{}');
    setUser(user);
  }, []);

  return {
    user
  };
};
