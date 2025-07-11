"use client"
import LatestOrderItem from '@/components/order/LatestOrderItem'
import Logo from '@/components/ui/Logo'
import { OrderWithProducts } from '@/src/types'
import React from 'react'
import useSWR from 'swr'

const OrdersPage = () => {
  const url = "/orders/api"
  const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
  const {data, isLoading} = useSWR<OrderWithProducts[]>(url, fetcher,{
    refreshInterval: 60000,
    revalidateOnFocus: false
  })
  if(isLoading) return <p className="text-center">Cargando</p>
  if(data) return (
    <>
        <h1 className='text-4xl text-center font-black mt-10'>Ordenes listas</h1>   
        <Logo />
        {data.length ? (
            <div
                className='grid grid-cols-2  gap-5 mt-5 max-w-3xl mx-auto'
            >
                {data.map(order => (
                    <LatestOrderItem
                        key={order.id}
                        order={order}
                    />
                ))}
            </div>
        ) : (
            <p className='text-center my-10'>No hay orrdenes listas</p>
        )}
    </>
  )
}

export default OrdersPage