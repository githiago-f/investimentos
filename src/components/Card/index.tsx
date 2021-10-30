import React from 'react';
import './styles.css';

type Props = {
  icon: string;
  title: string;
  value: string;
}

export const Card: React.FC<Props> = ({ icon, title, value }) => (
  <div className="bg-gray-50 py-5 pr-5 rounded-md flex hover:bg-gray-300 cursor-pointer">
    <div className="left-bar" />
    <div>
      <div className="flex space-x-5">
        <img height={32} width={32} src={icon} alt="Renda fixa icone" />
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
      <div>
        <p className="text-2xl font-medium">{value}</p>
      </div>
    </div>
  </div>
);
