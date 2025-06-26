import ProductSearchForm from "@/components/products/ProductSearchForm"
import ProductsPagination from "@/components/products/ProductsPagination"
import ProductTable from "@/components/products/ProductTable"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"
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
      <div className="flex flex-col  md:flex-row md:items-center md:justify-between gap-5">
        <Link
          href={"/admin/products/new"}
          className="bg-amber-500 w-full lg:w-auto px-10 py-3 text-xl text-center font-bold cursor-pointer"
        >
          Crear Producto
        </Link>
        <ProductSearchForm/>
      </div>
      <ProductTable products={products}/>
      <ProductsPagination page={+page} totalPages={totalPages}/>
    </>
  )
}

export default ProductPage