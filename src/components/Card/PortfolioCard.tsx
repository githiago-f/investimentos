import { CarteiraResponseDTO } from '@domain/portifolio';
import { TransacaoResponseDTO } from '@domain/transaction';
import React from 'react';
import { portfolioService } from 'services/portfolioService';
import { toBRL } from 'utils/toBRL';

type Props = {
  portfolio: CarteiraResponseDTO;
  icon: string;
  title: string;
  transactions: TransacaoResponseDTO[];
  onClick: (portfolio: CarteiraResponseDTO) => void
};

export const PortfolioCard: React.FC<Props> = ({ portfolio, icon, title, transactions, onClick }) => {
  const value = portfolioService().sumTransactions(transactions);

  return (
    <button
      onClick={() => onClick(portfolio)}
      className="bg-gray-50 py-5 pr-5 rounded-md flex hover:bg-gray-300 cursor-pointer"
    >
      <div className="left-bar" />
      <div>
        <div className="flex space-x-5">
          <img height={32} width={32} src={icon} alt="Renda fixa icone" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div>
          <p title="Total investido nesta carteira" className="text-lg font-medium">{toBRL(value)}</p>
        </div>
      </div>
    </button>
  );
};
