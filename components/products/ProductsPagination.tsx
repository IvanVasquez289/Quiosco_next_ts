import Link from 'next/link'
import React from 'react'

type ProductsPaginationProps = {
    page: number
    totalPages: number
}
const ProductsPagination = ({page, totalPages}: ProductsPaginationProps) => {
  return (
    <nav className='flex justify-center py-10'>
        {page > 1 && (
            <Link 
                href={`/admin/products?page=${page - 1}`} 
                className='bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0'
            > 
                &laquo;
            </Link>
        )}
        {Array.from({length: totalPages}).map((_, i) => (
            <Link 
                key={i}
                href={`/admin/products?page=${i + 1}`} 
                className={`${page === i + 1 ? "bg-amber-500" : "bg-white"}  px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
            >
                {i + 1}
            </Link>
        ))}
        {page < totalPages && (
            <Link 
                href={`/admin/products?page=${page + 1}`} 
                className='bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0'
            >
                &raquo;
            </Link>
        )}
    </nav>
  )
}

export default ProductsPagination