import { CredenciaisRequestDTO, UsuarioResponseDTO } from '@domain';
import { axios } from 'config/axios.setup';
import { ChangeEvent, useCallback, useState } from 'react';

export const useLoginHooks = () => {
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
      .then(({data}) => {
        localStorage.setItem('investimentos@user', JSON.stringify(data));

      }).catch(e => {
        setError({
          hasError: true,
          message: e.message
        });
      });
  }, [formData]);

  return {
    updateForm,
    submitLoginForm,
    error,
    formData
  };
};
