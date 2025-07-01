import ProductSearchForm from '@/components/products/ProductSearchForm'
import ProductTable from '@/components/products/ProductTable'
import Heading from '@/components/ui/Heading'
import { prisma } from '@/src/lib/prisma'
import React from 'react'


const searchProduct = async (searchTerm: string) => {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: "insensitive"
            }
        },
        include: {
            category: true
        }
    })

    return products
}

const SearchPage = async ({searchParams}: {searchParams: Promise<{search: string}>}) => {
  const {search} = await searchParams
  const products = await searchProduct(search)
  return (
    <>
        <Heading>Resultados de la busqueda: {search}</Heading>
        <div className="flex flex-col  md:flex-row md:items-center md:justify-end gap-5">
        <ProductSearchForm/>
      </div>
        <ProductTable products={products}/>
    </>
  )
}

export default SearchPage