declare module '@domain/user' {
  type UsuarioResponseDTO = {
    dataCadastro: string;
    email: string;
    id: number;
    login: string;
    nome: string;
  };

  type UsuarioRequestDTO = {
    email: string;
    login: string;
    nome: string;
    senha: string;
    senhaConfirmacao: string;
  };

  type CredenciaisRequestDTO = {
    login: string;
    senha: string;
  };
}
