declare module '@domain/portifolio' {
  type CarteiraResponseDTO = {
    dataCadastro: string;
    descricao: string;
    id: number;
    ultimaAtualizacao: string;
    usuario: number;
  };

  type CarteiraRequestDTO = {
    descricao: string;
    idUsuario: number;
  }
}
