import { prisma } from "@/src/lib/prisma"

const getCategories = async () => {
  return await prisma.category.findMany()
}
const OrderSidebar =  async () => {
  const categories = await getCategories()
  console.log(categories)
  return (
    <aside className="md:w-72 md:h-screen bg-white">
        OrderSidebar
    </aside>
  )
}

export default OrderSidebar