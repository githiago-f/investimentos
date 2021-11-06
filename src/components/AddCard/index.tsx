import React from 'react';

type Props = {
  onClick: () => void
}

export const AddCard: React.FC<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-gray-50 py-5 pr-5 rounded-md flex hover:bg-gray-300 cursor-pointer"
  >
    <div className="left-bar" />
    <div className="flex space-x-5 items-center justify-center h-full">
      <img height={32} width={32} src='https://cdn-icons.flaticon.com/png/512/2377/premium/2377839.png?token=exp=1636215734~hmac=98b033c974a0b2e09319e831f770f40c' alt="Renda fixa icone" />
      <h3 className="text-xl font-bold">Adicionar</h3>
    </div>
  </button>
);
