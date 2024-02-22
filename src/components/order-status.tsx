type OrderStatus =
  | 'pending'
  | 'processing'
  | 'delivering'
  | 'delivered'
  | 'cancelled'

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  cancelled: 'Cancelado',
  delivering: 'Em entrega',
  delivered: 'Entregue',
  processing: 'Em preparo',
}

interface orderStatusMapProps {
  status: OrderStatus
}

export function OrderStatus({ status }: orderStatusMapProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}

      {status === 'cancelled' && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}
      {status === 'delivered' && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}
      {['processing', 'delivering'].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-amber-500" />
      )}
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
