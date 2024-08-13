import { env } from "@/env";
import axios from "axios";

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
});

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return config;
  });
} // O interceptors vai interceptar cada requisição, e essa função recebe a config, config são os dados das requisições o corpo o cabeçalho, no caso quero somente colocar um delay nelas.
