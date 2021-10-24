import { axios } from "config/axios.setup";
import { ChangeEvent, useCallback, useState } from "react";

export const useHomeHooks = () => {
  const [formData, setFormData] = useState({login: '', senha: ''});

  const updateForm = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    const data = {... formData, [target.name]: target.value };
    setFormData(data);
  }, []);

  const submitLoginForm = useCallback(async () => {
    const { data } = await axios.post('/api/usuarios/auth', formData);
    console.log(data);
    return false;
  }, [formData]);

  return {
    updateForm,
    submitLoginForm
  };
};