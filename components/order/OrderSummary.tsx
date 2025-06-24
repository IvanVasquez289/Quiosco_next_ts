"use client"
import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails"

const OrderSummary = () => {
  const order = useStore((state) => state.order)
  return (
    <div className="md:w-64 lg:w-96 p-5 lg:h-screen lg:overflow-y-scroll">
      <h1 className="text-4xl font-black text-center">Mi pedido</h1>
      {order.length === 0 ? <p className="my-10 text-center">La orden esta vacia</p> : (
        <div className="mt-5">
          {order.map(product => (
            <ProductDetails key={product.id} item={product}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default OrderSummary