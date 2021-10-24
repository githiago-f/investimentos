import { CredenciaisRequestDTO, UsuarioResponseDTO } from "@domain";
import { axios } from "config/axios.setup";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export const useLoginHooks = () => {
  const [localUser, setLocalUser] = useState({} as UsuarioResponseDTO);
  const [formData, setFormData] = useState({
    login: '',
    senha: ''
  } as CredenciaisRequestDTO);
  const [error, setError] = useState({ hasError: false, message: ''});

  useEffect(() => {
    const jsonUser = localStorage.getItem('investimentos@user');
    const user = JSON.parse(jsonUser || '{}');
    setLocalUser(user);
  }, []);

  useEffect(() => {

  }, [localUser]);

  const updateForm = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    const data = {...formData, [target.name]: target.value };
    setFormData(data);
  }, [formData]);

  const submitLoginForm = useCallback(() => {
    axios.post<UsuarioResponseDTO>('/api/usuarios/auth', formData)
      .then(({data}) => {
        setLocalUser(data);
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
    formData,
    localUser
  };
};