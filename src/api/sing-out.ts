import { api } from "@/lib/axios";

interface UpdateProfileBody {
  name: string;
  description: string | null;
}

export async function signOut({ name, description }: UpdateProfileBody) {
  await api.put("rota do back", { name, description });
}
