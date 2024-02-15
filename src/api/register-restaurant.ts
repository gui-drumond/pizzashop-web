import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
  managerName: string
  restaurantName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  managerName,
  restaurantName,
  email,
  phone,
}: RegisterRestaurantBody) {
  const response = await api.post('/restaurants', {
    managerName,
    restaurantName,
    email,
    phone,
  })
  return response.data
}
