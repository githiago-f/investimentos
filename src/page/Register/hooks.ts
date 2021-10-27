import { ChangeEvent, useCallback, useState } from 'react';
import { UsuarioRequestDTO, UsuarioResponseDTO } from '@domain/user';
import { axios } from 'config/axios.setup';
import { useAuthActions } from 'actions/auth-actions';

export const useRegisterHooks = () => {
  const { login } = useAuthActions();
  const [formData, setFormData] = useState({
    email: '',
    login: '',
    nome: '',
    senha: '',
    senhaConfirmacao: ''
  } as UsuarioRequestDTO);

  const updateForm = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    const data = {...formData, [target.name]: target.value };
    setFormData(data);
  }, [formData]);

  const submitRegisterForm = useCallback(() => {
    axios.post<UsuarioResponseDTO>('/api/usuarios', formData)
      .then(({data}) => {
        login(data);
      }).catch(console.log);
  }, [formData]);

  return {
    formData,
    updateForm,
    submitRegisterForm
  };
};
