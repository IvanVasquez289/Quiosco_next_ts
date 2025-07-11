"use client";
import { useStore } from "@/src/store";
import { Product } from "@prisma/client";

type AddProductButtonProps = {
    product: Product
}
const AddProductButton = ({product}: AddProductButtonProps) => {
  const addToOrder = useStore((state) => state.addToOrder)
  return (
    <button
      onClick={() => addToOrder(product)}
      type="button"
      className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 p-3 font-bold uppercase w-full cursor-pointer "
    >
      Agregar
    </button>
  );
};

export default AddProductButton;
