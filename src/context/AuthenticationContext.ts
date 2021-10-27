import { UsuarioResponseDTO } from '@domain/user';
import { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

export const AuthenticationContext = createContext({} as { user?: UsuarioResponseDTO });

export const useAuthenticationHooks = () => {
  const history = useHistory();
  const [user, setUser] = useState({} as UsuarioResponseDTO);

  useEffect(() => {
    const jsonUser = localStorage.getItem('investimentos@user');
    const user = jsonUser && JSON.parse(jsonUser || '{}');
    setUser(user);

    if(user) {
      if(window.location.pathname !== '/investimentos') {
        history.replace('/');
      }
    } else {
      if(window.location.pathname !== '/investimentos/login') {
        history.replace('/login');
      }
    }
  }, []);

  return {
    user
  };
};
