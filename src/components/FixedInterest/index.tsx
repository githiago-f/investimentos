import React, { FC } from 'react';
import { useFixedInterestHooks } from './hooks';

type Props = {};

const FixedInterest: FC<Props> = () => {
  const {formRef, onSubmit, error} = useFixedInterestHooks();
  return (
    <form action="#" ref={formRef as any} onSubmit={onSubmit}>
      <div className="mt-5">
        <label htmlFor="descricao">Descrição</label>
        <input type="text" name="descricao" id="descricao" />
      </div>

      <div className="mt-5">
        <label htmlFor="preco">Preço</label>
        <input type="text" name="preco" id="preco" />
      </div>

      <div className="mt-5">
        <label htmlFor="rentabilidadeMensal">Rentabilidade Mensal</label>
        <input type="text" name="rentabilidadeMensal" id="rentabilidadeMensal" />
      </div>

      <div className="mt-5">
        <label htmlFor="vencimento">Vencimento</label>
        <input type="date" name="vencimento" id="vencimento" />
      </div>

      {error && (
        <p className="text-red-600">{error.message}</p>
      )}

      <button type="submit">Salvar</button>
    </form>
  );
};

export { FixedInterest };
