"use client"
import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

type CategoryIconProps = {
    category: Category
}
const CategoryIcon = ({category}: CategoryIconProps) => {
  const params = useParams<{category: string}>()
  return (
    <Link 
        href={`/order/${category.slug}`}
        className={`${params.category === category.slug && "bg-amber-500"} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b hover:bg-amber-500 transition-colors`}
    >
        <div className="w-16 h-16 relative">
            <Image 
                src={`/icon_${category.slug}.svg`} 
                alt="imagen icono"
                fill
            />
        </div>
        <p className="font-bold text-xl" >
            {category.name}
        </p>
    </Link>
  )
}

export default CategoryIcon