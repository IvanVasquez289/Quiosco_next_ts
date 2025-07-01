import { prisma } from "@/src/lib/prisma";

export const GET = async () => {
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
    return Response.json(order)
};