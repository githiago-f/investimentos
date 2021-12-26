import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AuthenticationContext } from 'context/AuthenticationContext';
import { portfolioService } from 'services/portfolioService';
import { CarteiraResponseDTO } from '@domain/portifolio';
import { fixedInterestService } from 'services/fixedInterestService';
import { RendaFixaResponseDTO } from '@domain/fixed-interest';

export const useDashboardHooks = () => {
  const { user } = useContext(AuthenticationContext);

  const pService = useMemo(() => portfolioService(user), [user]);
  const fixedInterest = useMemo(() => fixedInterestService(user), [user]);

  const [fixedInterestList, setFixedInterestList] = useState(null as RendaFixaResponseDTO[] | null);

  const [currentPortfolio, setCurrentPortfolio] = useState(null as CarteiraResponseDTO | null);
  const [portfolios, setPortfolios] = useState([] as CarteiraResponseDTO[]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(!user?.id) {
      return;
    }
    fixedInterest.getfixedInterest()
      .then(setFixedInterestList)
      .catch(console.error);
    pService.searchPortfolio()
      .then(setPortfolios)
      .catch(console.error);
  }, [pService]);

  const consolidatedAssets = useMemo(() => {
    const totalAtPortfolios = portfolios
      .map(({transacoes}) => transacoes.reduce((v, i)=>i.total+v, 0))
      .reduce((v, i)=>v+i, 0);

    const totalAtFixedInterest = fixedInterestList?.reduce((v, i) => v + i.preco, 0) || 0;

    return totalAtPortfolios + totalAtFixedInterest;
  }, [portfolios]);

  return {
    portfolios,
    consolidatedAssets,
    currentPortfolio,
    selectPortfolio: setCurrentPortfolio,
    open,
    setOpen,
    fixedInterestList
  };
};
