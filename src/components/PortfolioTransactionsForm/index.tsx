import { FormDialog } from 'components/FormDialog';
import { PortfolioSelectedContext } from 'context/PortfolioSelectedContext';
import React, { useContext } from 'react';
import { usePortfolioTransactionsFormHooks } from './hooks';

export const PortfolioTransactionsForm = () => {
  const { portfolio, isOpen, toggleOpen } = useContext(PortfolioSelectedContext);
  const { formRef, onSubmit, assets, error } = usePortfolioTransactionsFormHooks(toggleOpen);

  return (
    <FormDialog formName={'Carteira ' + portfolio?.descricao} onClose={toggleOpen} open={isOpen}>
      <form action='' ref={formRef as any} onSubmit={onSubmit}>
        <div className="mt-5">
          <label htmlFor="ativo">Ativo</label>
          <select className="w-full" name="ativo" id="ativo">
            <option value="">Selecione um ativo</option>
            {assets.map((i, key) => (
              <option value={key} key={key}>{i.descricao}</option>
            ))}
          </select>
        </div>

        <div className="mt-5">
          <label htmlFor="valorUnitario">Valor unitário</label>
          <input type="text" name="valorUnitario" id="valorUnitario" />
        </div>

        <div className="mt-5">
          <label htmlFor="quantidade">Quantidade</label>
          <input className="w-full" type="number" name="quantidade" id="quantidade" />
        </div>

        <div className="mt-5">
          <label htmlFor="data">Data</label>
          <input className="w-full" type="date" name="data" id="data" />
        </div>

        {error && (
          <p className="text-red-600">{error.message}</p>
        )}

        <button type="submit">Salvar</button>
        <button type="reset" onClick={toggleOpen}>Cancelar</button>
      </form>
    </FormDialog>
  );
};
