import { UsuarioResponseDTO } from '@domain/user';

export const login = (user: UsuarioResponseDTO) => {
  localStorage.setItem('investimentos@user', JSON.stringify(user));
};
