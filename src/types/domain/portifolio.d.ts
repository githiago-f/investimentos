declare module '@domain/portifolio' {
  type CarteiraResponseDTO = {
    dataCadastro: string;
    descricao: string;
    id: number;
    ultimaAtualizacao: string;
    usuario: number;
    transacoes: import('@domain/transaction').TransacaoResponseDTO[];
  };

  type CarteiraRequestDTO = {
    descricao: string;
    idUsuario: number;
  }
}
