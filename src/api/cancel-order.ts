import { api } from '@/lib/axios'

export interface CancelOrderParams {
  orderId: string
}

export async function CancelOrder({ orderId }: CancelOrderParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
