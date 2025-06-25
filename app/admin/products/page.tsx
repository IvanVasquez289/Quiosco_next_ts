import ProductTable from "@/components/products/ProductTable"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"

const getProducts = async () => {
  return await prisma.product.findMany({
    include: {
      category: true
    }
  })
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>
const ProductPage = async () => {
  const products = await getProducts()
  return (
    <>
      <Heading>Admnistrar Productos</Heading>
      <ProductTable products={products}/>
    </>
  )
}

export default ProductPage