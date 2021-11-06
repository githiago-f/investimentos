import { axios } from 'config/axios.setup';
import { Page } from '@shared/page';
import { CarteiraRequestDTO, CarteiraResponseDTO } from '@domain/portifolio';
import { UsuarioResponseDTO } from '@domain/user';
import { TransacaoResponseDTO } from '@domain/transaction';

/**
 * Servico para criação e busca de carteiras
 */
export const portfolioService = (user?: UsuarioResponseDTO) => {
  const searchPortfolio = async () => {
    try {
      const { data } = await axios.get<Page<CarteiraResponseDTO>>('/api/carteira');
      return data.content;
    } catch(e) {
      console.log(e);
      return [];
    }
  };

  const createPortifolio = async (description: string) => {
    const body = {
      descricao: description,
      idUsuario: user?.id
    } as CarteiraRequestDTO;
    const { data } = await axios.post('/api/carteira', body);
    console.log(data);
  };

  const sumTransactions = (transactions: TransacaoResponseDTO[]) => {
    return transactions.map(i=>i.total).reduce((v, i) => v+i, 0);
  };

  return {
    searchPortfolio,
    createPortifolio: user && createPortifolio,
    sumTransactions
  };
};
