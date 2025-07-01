import ProductCard from "@/components/products/ProductCard"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"


const getProducts = async (category: string) => {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })

  return products
}
const OrderPage = async ({params}: {params: Promise<{category: string}>}) => {
  const {category} = await params
  const products = await getProducts(category)
  return (
    <>
      <div className="flex  flex-col md:flex-row gap-3 justify-between items-center mb-10 sm:mb-0">
        <Heading>
          Elige y personaliza tu pedido
        </Heading>
        <Link 
          href={"/admin/products"}
          className="bg-amber-400 text-black py-3 px-10 text-center font-bold cursor-pointer"
        >
          Admin Panel
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4  items-start">
        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </>
  )
}

export default OrderPage