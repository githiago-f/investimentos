import React, { FC } from 'react';
import { useNewPortifolioHooks } from './hooks';

export const NewPortfolioForm: FC<{onClose: () => void}> = ({ onClose }) =>{
  const { error, loading, formRef, onSubmit } = useNewPortifolioHooks(onClose);
  return (
    <form action="" ref={formRef as any} onSubmit={onSubmit}>
      <div className="mt-5">
        <label htmlFor="descricao">Descrição da carteira</label>
        <input type="text" name="descricao" id="descricao" />
      </div>

      {error && (
        <p className="text-red-600">{error.message}</p>
      )}

      <button type="submit" disabled={loading}>Salvar</button>
      <button type="reset" disabled={loading} onClick={onClose}>Cancelar</button>
    </form>
  );
};
