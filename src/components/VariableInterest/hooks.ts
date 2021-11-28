import { AuthenticationContext } from 'context/AuthenticationContext';
import { FormEventHandler, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { variableInterestService } from 'services/variableInterestService';

export const useVariableInterestFormHooks = (callClose?: () => void) => {
  const { user } = useContext(AuthenticationContext);
  const formRef = useRef<HTMLFormElement>();
  const { current: variableInterest } = useRef(variableInterestService(user));
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

    variableInterest.createVariableInterest({
      cotacao: formRef.current?.['cotacao'].valueAsNumber,
      descricao: formRef.current?.['descricao'].value,
      ticker: formRef.current?.['ticker'].value
    })
      .then(callClose || (() => {}))
      .catch(setError)
      .finally(() => setLoading(false));

    return false;
  }, []);

  return {
    formRef,
    onSubmit,
    error,
    loading
  };
};
