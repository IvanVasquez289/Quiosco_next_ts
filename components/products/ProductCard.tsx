import { formatCurrency, getImagePath } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

type ProductCardProps = {
    product: Product
}
const ProductCard = ({product}: ProductCardProps) => {
  const imagePath = getImagePath(product.image)
  return (
    <div className=" bg-white shadow-md">
        <Image 
            src={imagePath} 
            alt="product image" 
            width={400} 
            height={500}
        />
        <div className="p-5">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="mt-5 font-black text-2xl text-amber-500">{formatCurrency(product.price)}</p>
            <AddProductButton product={product}/>
        </div>
    </div>
  )
}

export default ProductCard