"use client"
import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails"
import { formatCurrency } from "@/src/utils"
import { useMemo } from "react"
import { createOrder } from "@/actions/create-order-action"
import { orderSchema } from "@/src/schema"
import { toast } from "react-toastify"

const OrderSummary = () => {
  const order = useStore((state) => state.order)
  const total = useMemo(()=> order.reduce((acc, itm) => acc + itm.subtotal, 0), [order])
  const resetOrder = useStore((state) => state.resetOrder)

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      total,
      order
    }

    const result = orderSchema.safeParse(data)
    console.log(result)
    if(!result.success){
      result.error.issues.forEach((issue) => {
        toast.error(issue.message)
      })
      return
    }
    
    const response = await createOrder(data)
    if(response?.errors){
      response.errors.forEach((error) => {
        toast.error(error.message)
      })
      return
    }

    resetOrder()
    toast.success("Pedido realizado con exito")
  }
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
          <form action={handleCreateOrder}>
            <input 
              type="text" 
              name="name"
              placeholder="Nombre" 
              className="mt-5 w-full bg-white border p-3 outline-none rounded-md"
            />
            <button type="submit" className="bg-black text-white mt-5 p-3 font-bold uppercase w-full cursor-pointer rounded-md">
              Confirmar pedido
            </button>
          </form>
        </div>
      )}
    </aside>
  )
}

export default OrderSummary