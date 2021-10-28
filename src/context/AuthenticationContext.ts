import { UsuarioResponseDTO } from '@domain/user';
import { createContext, useEffect, useState } from 'react';

export const AuthenticationContext = createContext({} as { user?: UsuarioResponseDTO });

export const useAuthenticationHooks = () => {
  const [user, setUser] = useState({} as UsuarioResponseDTO);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const jsonUser = localStorage.getItem('investimentos@user');
    const user = jsonUser && JSON.parse(jsonUser || '{}');
    setUser(user);

    if(!user) {
      if(window.location.pathname !== '/investimentos/login') {
        setRedirect(true);
      }
    }
  }, [window.location.href]);

  return {
    user,
    redirect
  };
};
