import { api } from "@/lib/axios";

export interface SignInBody {
  email: string;
}

export async function signIn({ email }: SignInBody) {
  await api.post("ROTA DO BACK-END", { email });
}

//nao tem retorno
