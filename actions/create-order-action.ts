"use server"

import { prisma } from "@/src/lib/prisma"
import { orderSchema } from "@/src/schema"

export const createOrder = async (data: unknown) => {
    const result = orderSchema.safeParse(data)
    if(!result.success){
        return {
            errors: result.error.issues
        }
    }
    console.log(result)
    try {
        await prisma.order.create({
            data: {
                name: result.data.name,
                total: result.data.total,
                orderProducts: {
                    create: result.data.order.map(product => ({
                        productId: product.id,
                        quantity: product.quantity
                    }))
                }
            }
        })   
    } catch (error) {
        console.log(error)
    }
    
}