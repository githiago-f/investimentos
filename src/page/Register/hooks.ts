import { ChangeEvent, useCallback, useState } from "react";
import { UsuarioRequestDTO } from "@domain";
import { axios } from "config/axios.setup";

export const useRegisterHooks = () => {
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
    axios.post('/api/usuarios', formData)
      .then(({data}) => {
        console.log(data);
      }).catch(console.log);
  }, [formData]);

  return {
    formData,
    updateForm,
    submitRegisterForm
  };
};