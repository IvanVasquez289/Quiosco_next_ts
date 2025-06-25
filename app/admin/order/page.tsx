import OrderCard from '@/components/order/OrderCard'
import Heading from '@/components/ui/Heading'
import { prisma } from '@/src/lib/prisma'
import React from 'react'

const getPendingOrders = async () => {
  const order = await prisma.order.findMany({
    where: {
      status: false
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  })

  return order
}
const OrdersPage = async () => {
  const order = await getPendingOrders()
  return (
    <>
      <Heading>Administrar Ordenes</Heading>
      {order.length ? (
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5'>
          {order.map(order => (
            <OrderCard key={order.id} order={order}/>
          ))}
        </div>
      ) : (
        <p className="text-center">No hay ordenes pendientes</p>
      )}
    </>
  )
}

export default OrdersPage