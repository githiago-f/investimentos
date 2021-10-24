import { UsuarioResponseDTO } from "@domain";
import { Context, useContext } from "react";

type CtxType = { user: UsuarioResponseDTO };

export const AuthenticationContext = useContext<CtxType>({} as Context<CtxType>);