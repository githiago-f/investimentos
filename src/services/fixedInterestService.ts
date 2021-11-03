import { RendaFixaRequestDTO, RendaFixaResponseDTO } from '@domain/fixed-interest';
import { UsuarioResponseDTO } from '@domain/user';
import { Page } from '@shared/page';
import { axios } from 'config/axios.setup';

export const fixedInterestService = (user: UsuarioResponseDTO) => {
  const getfixedInterest = async () => {
    try {
      const { data } = await axios.get<Page<RendaFixaResponseDTO>>(`/api/rendafixa/${user.id}`);
      return data.content;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const createfixedInterest = async (body: Partial<RendaFixaRequestDTO>) => {
    // TODO
    try {
      const data = {
        ...body,
        usuario: user.id
      } as RendaFixaRequestDTO;
      await axios.post('/api/rendafixa', data);
    } catch(e) {
      console.log(e);
      return [];
    }
  };

  return {
    getfixedInterest,
    createfixedInterest
  };
};
