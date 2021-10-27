import { UsuarioResponseDTO } from '@domain/user';
import { useCallback } from 'react';
import { useHistory } from 'react-router';

export const useAuthActions = () => {
  const history = useHistory();

  const login = useCallback((user: UsuarioResponseDTO) => {
    localStorage.setItem('investimentos@user', JSON.stringify(user));
    history.replace('/');
  }, [history]);

  const logout = useCallback(() => {
    localStorage.removeItem('investimentos@user');
    history.replace('/login');
  }, [history]);

  return {
    login,
    logout
  };
};
