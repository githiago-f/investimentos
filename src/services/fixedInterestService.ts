import { RendaFixaRequestDTO, RendaFixaResponseDTO } from '@domain/fixed-interest';
import { UsuarioResponseDTO } from '@domain/user';
import { Page } from '@shared/page';
import { axios } from 'config/axios.setup';
import { InvalidArgumentError } from 'utils/errors/InvalidArgumentError';

import isDecimal from 'validator/lib/isDecimal';
import isDate from 'validator/lib/isDate';

const MEDIA_DIAS_MES = 30.4375;

export const fixedInterestService = (user?: UsuarioResponseDTO) => {
  const getfixedInterest = async () => {
    if(!user?.id) {
      window.location.reload();
      return [];
    }
    try {
      const { data } = await axios.get<Page<RendaFixaResponseDTO>>(`/api/rendafixa/${user?.id}`);
      return data.content;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const createfixedInterest = async (body: Partial<RendaFixaRequestDTO>) => {
    if(!isDecimal(String(body.preco))) {
      throw new InvalidArgumentError('O preço deve ser um numero real!');
    }
    if(!isDecimal(String(body.rentabilidadeMensal))) {
      throw new InvalidArgumentError('A rentabilidade mensal deve ser um numero real!');
    }
    if(!isDate(body.vencimento || '', { format: 'DD/MM/YYYY' })) {
      throw new InvalidArgumentError('A data de vencimento informada não é valida!');
    }

    body.preco = parseFloat(String(body.preco));
    body.rentabilidadeMensal = parseFloat(String(body.rentabilidadeMensal));
    body.rentabilidadeDiaria = body.rentabilidadeMensal / MEDIA_DIAS_MES;

    await axios.post('/api/rendafixa', {
      ...body,
      usuario: user?.id
    });
  };

  return {
    getfixedInterest,
    createfixedInterest
  };
};
