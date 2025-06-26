"use client"

import { SearchSchema } from "@/src/schema"
import { redirect } from "next/navigation"
import { toast } from "react-toastify"

const ProductSearchForm = () => {
  const handleSearchForm = async (formData: FormData) => {
      const data = {
        search : formData.get('search')
      }

      const result = SearchSchema.safeParse(data)
      if(!result.success){
        result.error.issues.forEach((issue) => {
          toast.error(issue.message)
        })
        return
      }
      redirect(`/admin/products/search?search=${result.data.search}`)
  }
  return (
    <form
        action={handleSearchForm}
        className="flex items-center"
    >
        <input 
            type="text" 
            name="search" 
            placeholder="Buscar Producto" 
            className="border border-gray-300 bg-white h-10 px-5 pr-12 text-sm focus:outline-none w-full"
        />
        <input type="submit" value="Buscar" className="bg-indigo-600 text-white p-2 uppercase cursor-pointer"/>
    </form>
  )
}

export default ProductSearchForm