import { CarteiraResponseDTO } from '@domain/portifolio';
import { createContext } from 'react';

export const PortfolioSelectedContext = createContext({
  portfolio: null
} as { portfolio: CarteiraResponseDTO | null });
