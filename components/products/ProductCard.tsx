import { formatCurrency } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"

type ProductCardProps = {
    product: Product
}
const ProductCard = ({product}: ProductCardProps) => {
  return (
    <div className=" bg-white shadow-md">
        <Image 
            src={`/products/${product.image}.jpg`} 
            alt="product image" 
            width={400} 
            height={500}
        />
        <div className="p-5">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="mt-5 font-black text-2xl text-amber-500">{formatCurrency(product.price)}</p>
            <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 p-3 font-bold uppercase w-full cursor-pointer "
            >
                Agregar
            </button>
        </div>
    </div>
  )
}

export default ProductCard