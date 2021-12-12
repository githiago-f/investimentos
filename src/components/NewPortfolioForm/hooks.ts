import { AuthenticationContext } from 'context/AuthenticationContext';
import { FormEventHandler, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { portfolioService } from 'services/portfolioService';

export const useNewPortifolioHooks = (callClose?: () => void) => {
  const { user } = useContext(AuthenticationContext);
  const formRef = useRef<HTMLFormElement>();
  const { current: portfolio } = useRef(portfolioService(user));
  const [error, setError] = useState(null as Error | null);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    if(formRef.current) {
      formRef.current.onchange = () => {
        setError(null);
      };
    }
  }, [formRef]);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault();
    setLoading(true);

    if(!portfolio.createPortifolio) return;

    const description = formRef.current?.['descricao'].value;

    portfolio.createPortifolio(description)
      .then(callClose || (() => {}))
      .catch(setError)
      .finally(() => setLoading(false));

    return false;
  }, []);

  return {
    formRef,
    error,
    loading,
    onSubmit
  };
};
