import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { getOrderDetails } from '@/api/get-order-details'
import { OrderStatus } from '@/components/order-status'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export interface OrderDetailProps {
  orderId: string
  open: boolean
}

export function OrderDetails({ orderId, open }: OrderDetailProps) {
  const { data: order } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: open,
  })

  if (!order) {
    return null
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: {order?.id}</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      {order && (
        <div className="space-y-6 ">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <OrderStatus status={order?.status} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Cliente</TableCell>
                <TableCell className="flex justify-end">
                  {order?.customerName.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Telefone
                </TableCell>
                <TableCell className="flex justify-end">
                  {order?.customerName.phone}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">E-mail</TableCell>
                <TableCell className="flex justify-end">
                  {order?.customerName.email}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Realizado há{' '}
                </TableCell>
                <TableCell className="flex justify-end">
                  {formatDistanceToNow(order?.createAt, {
                    locale: ptBR,
                    addSuffix: true,
                  })}{' '}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Qtd.</TableHead>
                <TableHead className="text-right">Preço</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order.orderItems.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.product.name} </TableCell>
                    <TableHead className="text-right">
                      {item.quantity}
                    </TableHead>
                    <TableHead className="text-right">
                      {(item.priceInCents / 100).toLocaleString('pt-Br', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableHead>
                    <TableHead className="text-right">
                      {(
                        (item.priceInCents * item.quantity) /
                        100
                      ).toLocaleString('pt-Br', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableHead>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell className="text-muted-foreground" colSpan={3}>
                  Total do pedido
                </TableCell>
                <TableCell className="text-right font-medium">
                  R$ 279,60
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      )}
    </DialogContent>
  )
}
