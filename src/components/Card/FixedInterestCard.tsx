import { RendaFixaResponseDTO } from '@domain/fixed-interest';
import React from 'react';
import { toBRL } from 'utils/toBRL';

type Props = {
  fixedInterest: RendaFixaResponseDTO;
};

export const FixedInterestCard: React.FC<Props> = ({ fixedInterest }) => {
  return (
    <button
      onClick={() => {}}
      className="bg-gray-50 py-5 pr-5 rounded-md flex hover:bg-gray-300 cursor-pointer"
    >
      <div className="left-bar" />
      <div>
        <div className="flex space-x-5">
          <div style={{height: 32, width: 32}}>
            <h1>{fixedInterest.rentabilidadeDiaria.toFixed(2)}</h1>
          </div>
          <h3 className="text-xl font-bold">{fixedInterest.descricao}</h3>
        </div>
        <div>
          <p title="Total investido nesta carteira" className="text-lg font-medium">{toBRL(fixedInterest.preco)}</p>
        </div>
      </div>
    </button>
  );
};
