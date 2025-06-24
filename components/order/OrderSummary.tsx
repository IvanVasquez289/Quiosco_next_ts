"use client"
import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails"
import { formatCurrency } from "@/src/utils"
import { useMemo } from "react"

const OrderSummary = () => {
  const order = useStore((state) => state.order)
  const total = useMemo(()=> order.reduce((acc, itm) => acc + itm.subtotal, 0), [order])
  return (
    <aside className="md:w-64 lg:w-96 p-5 lg:h-screen lg:overflow-y-scroll">
      <h1 className="text-4xl font-black text-center">Mi pedido</h1>
      {order.length === 0 ? <p className="my-10 text-center">La orden esta vacia</p> : (
        <div className="mt-5">
          {order.map(product => (
            <ProductDetails key={product.id} item={product}/>
          ))}
          <p className="text-2xl mt-20 text-center">
            Total a pagar: {" "}
            <span className="font-bold">{formatCurrency(total)}</span>
          </p>
        </div>
      )}
    </aside>
  )
}

export default OrderSummary