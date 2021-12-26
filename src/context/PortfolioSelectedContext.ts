import { CarteiraResponseDTO } from '@domain/portifolio';
import { createContext, useState } from 'react';

type PortifolioContext = {
  portfolio: CarteiraResponseDTO | null,
  isOpen: boolean,
  toggleOpen: () => void
};

export const PortfolioSelectedContext = createContext({
  portfolio: null,
  isOpen: false,
  toggleOpen: () => {}
} as PortifolioContext);

export const usePortfolioSelectedHooks = (portfolio: CarteiraResponseDTO | null) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return {
    isOpen,
    toggleOpen,
    portfolio
  };
};
