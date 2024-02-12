import { DollarSign } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { DaysOrdersAmountCards } from './days-order-amount'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight"> Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DaysOrdersAmountCards />
          <MonthCanceledOrdersAmountCard />
        </div>
      </div>
    </>
  )
}
