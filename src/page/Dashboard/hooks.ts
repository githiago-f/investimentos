import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AuthenticationContext } from 'context/AuthenticationContext';
import { portfolioService } from 'services/portfolioService';
import { CarteiraResponseDTO } from '@domain/portifolio';

export const useDashboardHooks = () => {
  const { user } = useContext(AuthenticationContext);
  const pService = useMemo(() => portfolioService(user), [user]);

  const [currentPortfolio, setCurrentPortfolio] = useState(null as CarteiraResponseDTO | null);

  const [portfolios, setPortfolios] = useState([] as CarteiraResponseDTO[]);

  useEffect(() => {
    if(!user?.id) {
      return;
    }
    pService.searchPortfolio()
      .then(setPortfolios)
      .catch(console.error);
  }, [pService]);

  const consolidatedAssets = useMemo(() => {
    const totalAtPortfolios = portfolios
      .map(({transacoes}) => transacoes.reduce((v, i)=>i.total+v, 0))
      .reduce((v, i)=>v+i, 0);
    return totalAtPortfolios;
  }, [portfolios]);

  const selectPortfolio = useCallback((portfolio)=> {
    setCurrentPortfolio(portfolio);
  }, [currentPortfolio]);

  return {
    portfolios,
    consolidatedAssets,
    currentPortfolio,
    selectPortfolio
  };
};
