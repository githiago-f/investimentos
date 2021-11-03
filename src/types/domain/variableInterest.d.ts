declare module '@domain/variable-interest' {
  type RendaVariavelRequestDTO = {
    cotacao: number;
    descricao: string;
    ticker: string;
    usuario: number;
  };

  type RendaVariavelResponseDTO = {
    cotacao: number;
    dataAtualizacao: string;
    dataCadastro: string;
    descricao: string;
    id: number;
    ticker: string;
    usuario: number;
  };
}
