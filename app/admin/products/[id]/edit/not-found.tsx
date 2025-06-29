import Heading from '@/components/ui/Heading'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='text-center'>
        <Heading>Producto No Encontrado</Heading>
        <Link
            href={"/admin/products"}
            className='bg-amber-400 text-black py-3 px-10 text-center font-bold w-full cursor-pointer lg:w-auto'
        >
            Ir a la pagina de productos
        </Link>
    </div>
  )
}

export default NotFound