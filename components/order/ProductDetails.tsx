import { useStore } from "@/src/store";
import { OrderItem } from "@/src/types";
import { formatCurrency } from "@/src/utils";
import { MinusIcon, PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";
type ProductDetailsProps = {
  item: OrderItem;
};
const ProductDetails = ({ item }: ProductDetailsProps) => {
  const incrementQuantity = useStore((state) => state.incrementQuantity)
  const decrementQuantity = useStore((state) => state.decrementQuantity)
  const removeItem = useStore((state) => state.removeItem)
  return (
    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <p className="text-xl font-bold">{item.name} </p>

          <button type="button" onClick={() => {removeItem(item.id)}}>
            <XCircleIcon className="text-red-600 h-8 w-8 cursor-pointer" />
          </button>
        </div>
        <p className="text-2xl text-amber-500 font-black">
          {formatCurrency(item.price)}
        </p>
        <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
          <button type="button" onClick={() => {decrementQuantity(item.id)}}>
            <MinusIcon className="h-6 w-6 cursor-pointer" />
          </button>

          <p className="text-lg font-black ">{item.quantity}</p>

          <button type="button" onClick={() => {incrementQuantity(item.id)}}>
            <PlusIcon className="h-6 w-6 cursor-pointer" />
          </button>
        </div>
        <p className="text-xl font-black text-gray-700">
          Subtotal: {""}
          <span className="font-normal">{formatCurrency(item.subtotal)}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
