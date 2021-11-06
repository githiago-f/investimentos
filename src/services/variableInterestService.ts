import { UsuarioResponseDTO } from '@domain/user';
import { RendaVariavelRequestDTO, RendaVariavelResponseDTO } from '@domain/variable-interest';
import { axios } from 'config/axios.setup';

export const variableInterestService = (user: UsuarioResponseDTO) => {
  const createVariableInterest = async (data: Partial<RendaVariavelRequestDTO>) => {
    try {
      const response = await axios.post<RendaVariavelResponseDTO>('/', {
        ...data,
        usuario: user.id
      });
      return response.data;
    }catch(e) {
      console.log(e);
      return null;
    }
  };

  return {
    createVariableInterest
  };
};
