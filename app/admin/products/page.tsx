import ProductsPagination from "@/components/products/ProductsPagination"
import ProductTable from "@/components/products/ProductTable"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import { redirect } from "next/navigation"


const productCount = async () => {
  return await prisma.product.count()
}
const getProducts = async (pageSize: number, skip: number) => {
  return await prisma.product.findMany({
    take:pageSize,
    skip,
    include: {
      category: true
    }
  })
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>
const ProductPage = async ({searchParams}: {searchParams: {page: string}}) => {
  const {page = "1"} = await searchParams
  const pageSize = 10
  const skip = (+page - 1) * pageSize

  if(+page < 1 ) redirect("/admin/products")

  const productsData =  getProducts(pageSize, skip)
  const totalProductsData =  productCount()

  const [products, totalProducts] = await Promise.all([productsData, totalProductsData])
  const totalPages = Math.ceil(totalProducts / pageSize)

  if(+page > totalPages) redirect(`/admin/products`)
  return (
    <>
      <Heading>Admnistrar Productos</Heading>
      <ProductTable products={products}/>
      <ProductsPagination page={+page} totalPages={totalPages}/>
    </>
  )
}

export default ProductPage