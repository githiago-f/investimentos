import { ChangeEvent, useCallback, useState } from 'react';
import { UsuarioRequestDTO, UsuarioResponseDTO } from '@domain/user';
import { axios } from 'config/axios.setup';
import { login } from 'actions/login';

export const useRegisterHooks = () => {
  const [formData, setFormData] = useState({
    email: '',
    login: '',
    nome: '',
    senha: '',
    senhaConfirmacao: ''
  } as UsuarioRequestDTO);
  const [redirect, setRedirect] = useState(false);

  const updateForm = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    const data = {...formData, [target.name]: target.value };
    setFormData(data);
  }, [formData]);

  const submitRegisterForm = useCallback(() => {
    axios.post<UsuarioResponseDTO>('/api/usuarios', formData)
      .then(({data}) => {
        login(data);
        setRedirect(true);
      }).catch(console.log);
  }, [formData]);

  return {
    formData,
    updateForm,
    submitRegisterForm,
    redirect
  };
};
