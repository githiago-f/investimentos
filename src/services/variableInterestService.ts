import { UsuarioResponseDTO } from '@domain/user';
import { RendaVariavelRequestDTO, RendaVariavelResponseDTO } from '@domain/variable-interest';
import { axios } from 'config/axios.setup';
import { InvalidArgumentError } from 'utils/errors/InvalidArgumentError';
import isEmpty from 'validator/lib/isEmpty';
import isDecimal from 'validator/lib/isDecimal';

export const variableInterestService = (user: UsuarioResponseDTO) => {
  const createVariableInterest = async (data: Partial<RendaVariavelRequestDTO>) => {
    if(isEmpty((data.ticker || '').trim())) {
      throw new InvalidArgumentError('Ticker não devia estar vazio');
    }
    const cotacao = String(data.cotacao).trim();
    if(isEmpty(cotacao) || !isDecimal(cotacao)) {
      throw new InvalidArgumentError('Cotação deve ser um número real');
    }
    const response = await axios.post<RendaVariavelResponseDTO>('/api/rendavariavel', {
      ...data,
      cotacao: data.cotacao,
      usuario: user.id
    });
    return response.data;
  };

  return {
    createVariableInterest
  };
};
