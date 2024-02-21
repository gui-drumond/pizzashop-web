import { api } from '@/lib/axios'

export interface GetManagedRestaurantResponse {
  id: string
  name: string
  description: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updateAt: Date | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )
  return response.data
}
