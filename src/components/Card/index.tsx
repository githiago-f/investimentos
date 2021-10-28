import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export const Card = () => (
  <div className="bg-gray-200 py-5 pr-5 rounded-md flex">
    <div className="left-bar" />
    <div>
      <div className="flex justify-between">
        <img src="https://via.placeholder.com/32x32" alt="Renda fixa icone" />
        <h3 className="text-3xl font-bold">Renda Fixa</h3>
      </div>
      <div>
        <p className="text-xl font-medium">R$ 1.000,00</p>
      </div>
    </div>
  </div>
);
