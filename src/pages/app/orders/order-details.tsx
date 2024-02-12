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

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 1231231231k23jl1</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6 ">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <div className="font-medium text-muted-foreground">
                    Pendente
                  </div>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Guilherme Fernandes Drumond
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">19 98155 1265</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                drumond.guilherme@hotmail.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há{' '}
              </TableCell>
              <TableCell className="flex justify-end">há 3 minutos</TableCell>
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
            <TableRow>
              <TableCell>Pizza Pepperoni Família </TableCell>
              <TableHead className="text-right">2</TableHead>
              <TableHead className="text-right">R$ 69,90</TableHead>
              <TableHead className="text-right">R$ 139,80</TableHead>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Pepperoni Família </TableCell>
              <TableHead className="text-right">2</TableHead>
              <TableHead className="text-right">R$ 69,90</TableHead>
              <TableHead className="text-right">R$ 139,80</TableHead>
            </TableRow>
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
    </DialogContent>
  )
}
