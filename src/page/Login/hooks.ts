import { CredenciaisRequestDTO, UsuarioResponseDTO } from '@domain/user';
import { useAuthActions } from 'actions/auth-actions';
import { axios } from 'config/axios.setup';
import { ChangeEvent, useCallback, useState } from 'react';

export const useLoginHooks = () => {
  const { login } = useAuthActions();
  const [formData, setFormData] = useState({
    login: '',
    senha: ''
  } as CredenciaisRequestDTO);
  const [error, setError] = useState({ hasError: false, message: ''});

  const updateForm = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    const data = {...formData, [target.name]: target.value };
    setFormData(data);
  }, [formData]);

  const submitLoginForm = useCallback(() => {
    axios.post<UsuarioResponseDTO>('/api/usuarios/auth', formData)
      .then(({data}) => { login(data); })
      .catch(e => {
        const message = e.response.data?.errors || ['500'];
        setError({ hasError: true, message: message.join('\n') });
      });
  }, [formData]);

  return {
    updateForm,
    submitLoginForm,
    error,
    formData
  };
};
