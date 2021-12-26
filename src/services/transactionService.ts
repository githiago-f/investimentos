import { CarteiraResponseDTO } from '@domain/portifolio';
import { TransacaoRequestDTO } from '@domain/transaction';
import { UsuarioResponseDTO } from '@domain/user';
import { axios } from 'config/axios.setup';
import isDecimal from 'validator/lib/isDecimal';

type Props = {
  portfolio: CarteiraResponseDTO;
  user?: UsuarioResponseDTO;
};

export const transactionService = ({ portfolio, user }: Props) => {
  const buyAsset = (transaction: TransacaoRequestDTO) => {
    if(!user) {
      throw new Error('Usuário não autenticado');
    }
    transaction.usuario = user?.id;
    transaction.carteira = portfolio.id;
    transaction.tipoTransacao = 'COMPRA';

    if(!isDecimal(String(transaction.valorUnitario))) {
      throw new Error('Decimal should be real number');
    }

    return axios.post('/api/transacao', transaction);
  };

  return {
    buyAsset,
  };
};
