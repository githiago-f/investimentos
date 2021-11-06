declare module '@domain/transaction' {
  type TransacaoResponseDTO = {
    ativo: number;
    carteira: number;
    dataAtualizacao: string;
    dataCadastro: string;
    id: number
    quantidade: number;
    tipoTransacao: string;
    total: number;
    usuario: number;
    valorUnitario: number;
  }

  type TransacaoRequestDTO = {
    ativo: number;
    carteira: number;
    data: string;
    quantidade: number;
    tipoTransacao: string;
    usuario: number;
    valorUnitario: number;
  }
}
