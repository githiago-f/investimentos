import React, { FC } from 'react';
import { useVariableInterestFormHooks } from './hooks';

type Props = {
  callClose?: () => void
};

const VariableInterest: FC<Props> = (props) => {
  const { formRef, onSubmit, error, loading } = useVariableInterestFormHooks(props.callClose);
  return (
    <form action="#" ref={formRef as any} onSubmit={onSubmit}>
      <div className="mt-5">
        <label htmlFor="cotacao">Cotação (0.0)</label>
        <input type="text" name="cotacao" id="cotacao" />
      </div>

      <div className="mt-5">
        <label htmlFor="descricao">Descrição do ativo</label>
        <input type="text" name="descricao" id="descricao" />
      </div>

      <div className="mt-5">
        <label htmlFor="ticker"> Ticker</label>
        <input type="text" name="ticker" id="ticker" />
      </div>

      {error && (
        <p className="text-red-600">{error.message}</p>
      )}

      <button type="submit" disabled={loading}>Salvar</button>
    </form>
  );
};

VariableInterest.defaultProps = {
  callClose: () => {}
};

export { VariableInterest };
