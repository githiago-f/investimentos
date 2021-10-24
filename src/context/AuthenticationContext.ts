import { UsuarioResponseDTO } from "@domain";
import { createContext } from "react";

export const AuthenticationContext = createContext({} as { user?: UsuarioResponseDTO });