import { UsuarioResponseDTO } from '@domain/user';
import { createContext, useEffect, useState } from 'react';
import { either } from 'utils/stringEither';

export const AuthenticationContext = createContext({} as { user: UsuarioResponseDTO });

export const useAuthenticationHooks = () => {
  const [user, setUser] = useState({} as UsuarioResponseDTO);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const jsonUser = localStorage.getItem('investimentos@user');
    const user = jsonUser && JSON.parse(jsonUser);
    setUser(user);

    if(!user) {
      if(!either(window.location.pathname, '/investimentos/login', '/investimentos/register')) {
        setRedirect(true);
      }
    }
  }, [window.location.href]);

  return {
    user,
    redirect
  };
};
