import { prisma } from "@/src/lib/prisma"

export const GET = async () => {
    try {
        const orders = await prisma.order.findMany({
            take: 5,
            where: {
                orderReadyAt: {
                    not: null
                }
            },
            orderBy: {
                orderReadyAt: 'desc'
            },
            include: {
                orderProducts: {
                    include: {
                        product: true
                    }
                }
            }

        })

        return Response.json(orders)
    } catch (error) {
        console.log(error)
    }
}