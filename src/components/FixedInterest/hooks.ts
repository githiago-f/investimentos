import { AuthenticationContext } from 'context/AuthenticationContext';
import { FormEventHandler, useCallback, useContext, useRef, useState } from 'react';
import { fixedInterestService } from 'services/fixedInterestService';

const dateFormat = Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  year: 'numeric',
  month: '2-digit',
  timeZone: 'america/sao_paulo'
});

export const useFixedInterestHooks = (close: () => void) => {
  const { user } = useContext(AuthenticationContext);
  const formRef = useRef<HTMLFormElement>();
  const {current: fixedInterest } = useRef(fixedInterestService(user));
  const [error, setError] = useState(null as Error | null);
  const [loading, setLoading] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    const formData = formRef.current;

    const dueDate: Date = formData?.['vencimento'].valueAsDate || new Date();
    dueDate.setDate(dueDate.getDate() + 1);

    fixedInterest.createfixedInterest({
      descricao: formData?.['descricao'].value,
      preco: formData?.['preco'].value,
      rentabilidadeMensal: formData?.['rentabilidadeMensal'].value,
      vencimento: dateFormat.format(dueDate)
    })
      .then(e => close())
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
