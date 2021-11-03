import { useContext, useEffect, useMemo, useState } from 'react';
import { AuthenticationContext } from 'context/AuthenticationContext';
import { fixedInterestService } from 'services/fixedInterestService';
import { RendaFixaResponseDTO } from '@domain/fixed-interest';

export const useDashboardHooks = () => {
  const { user } = useContext(AuthenticationContext);
  const service = useMemo(() => fixedInterestService(user), [user]);

  const [fixedInterest, setfixedInterest] = useState([] as RendaFixaResponseDTO[]);

  useEffect(() => {
    if(!user.id) {
      return;
    }
    service.getfixedInterest()
      .then(setfixedInterest);
  }, [service]);

  const totalFixedInterest = useMemo(() => {
    return fixedInterest.reduce((val, i)=> i.preco + val, 0)
      .toLocaleString('pt-br', {
        currency: 'BRL',
        style: 'currency'
      });
  }, [fixedInterest]);

  return {
    totalFixedInterest
  };
};
