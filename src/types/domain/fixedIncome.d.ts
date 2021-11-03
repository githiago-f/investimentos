declare module '@domain/fixed-interest' {
  type RendaFixaResponseDTO = {
    dataCadastro: string;
    descricao: string;
    id: number;
    preco: number;
    rentabilidadeDiaria: number;
    rentabilidadeMensal: number;
    tipoAtivo: string;
    usuario: number;
    vencimento: string;
  };

  type RendaFixaRequestDTO = {
    descricao: string;
    preco: number;
    rentabilidadeDiaria: number;
    rentabilidadeMensal: number;
    usuario: number;
    vencimento: string;
  };
}
