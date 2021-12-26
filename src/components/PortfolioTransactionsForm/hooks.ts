import { TransacaoRequestDTO } from '@domain/transaction';
import { RendaVariavelResponseDTO } from '@domain/variable-interest';
import { Page } from '@shared/page';
import { axios } from 'config/axios.setup';
import { AuthenticationContext } from 'context/AuthenticationContext';
import { PortfolioSelectedContext } from 'context/PortfolioSelectedContext';
import { FormEvent, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { transactionService } from 'services/transactionService';

export const usePortfolioTransactionsFormHooks = (onClose: () => void) => {
  const formRef = useRef<HTMLFormElement>();
  const { user } = useContext(AuthenticationContext);
  const { portfolio } = useContext(PortfolioSelectedContext);
  const [assets, setAssets] = useState<RendaVariavelResponseDTO[]>([]);
  const [error, setError] = useState(null as Error | null);

  const tranService = useMemo(() => {
    if(!portfolio || !user) return;
    return transactionService({ user, portfolio });
  }, [user, portfolio]);

  const loadAssets = async () => {
    const response = await axios.get<Page<RendaVariavelResponseDTO>>('/api/rendavariavel/'+user.id);
    return response.data.content;
  };

  useEffect(() => {
    if(!user) {
      return;
    }
    loadAssets().then(setAssets);
  }, [user]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!formRef.current  || !formRef.current.checkValidity()) {
      return;
    }
    const assetIndex = formRef.current['ativo'].value;
    const unitValue = formRef.current['valorUnitario'].value;
    const date = new Date(formRef.current['data'].value);

    const formDataJson = {
      ativo: assets[assetIndex].id,
      valorUnitario: unitValue,
      quantidade: formRef.current['quantidade'].valueAsNumber,
      data: new Intl.DateTimeFormat('pt-br').format(date)
    } as TransacaoRequestDTO;

    tranService?.buyAsset(formDataJson)
      .then(onClose)
      .catch(setError);
  };

  return {
    onSubmit,
    formRef,
    assets,
    error
  };
};
