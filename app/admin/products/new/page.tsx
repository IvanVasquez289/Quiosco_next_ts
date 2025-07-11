import AddProductForm from "@/components/products/AddProductForm"
import ProductForm from "@/components/products/ProductForm"
import Heading from "@/components/ui/Heading"

const NewProductPage = () => {
  return (
    <>
      <Heading>Crear Producto</Heading>
      <AddProductForm>
        <ProductForm/>
      </AddProductForm>
    </>
  )
}

export default NewProductPage