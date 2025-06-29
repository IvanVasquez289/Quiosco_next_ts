import { prisma } from '@/src/lib/prisma'
import { notFound } from 'next/navigation'

const getProductById = async (id: number) => {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })    

    if(!product){
        notFound()
    }
    return product
}

const EditPage = async ({params}: {params: {id: string}}) => {
  const {id} = await params
  const product = await getProductById(+id)
  console.log(product)
  return (
    <div>EditPage</div>
  )
}

export default EditPage