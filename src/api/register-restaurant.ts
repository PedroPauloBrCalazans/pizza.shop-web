import { api } from "@/lib/axios";

export interface RegisterRestaurantBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post("ROTA DO BACK-END", {
    restaurantName,
    managerName,
    email,
    phone,
  });
}
