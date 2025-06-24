import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";

interface Store {
    order: OrderItem[],
    addToOrder: (product: Product) => void,
    incrementQuantity: (id: number) => void,
    decrementQuantity: (id: number) => void,
    removeItem: (id: number) => void,
    resetOrder: () => void
}

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 5;
export const useStore = create<Store>((set,get)=>({
    order: [],
    addToOrder: (product: Product) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {categoryId, image, ...data} = product;
        const productExists = get().order.some(item => item.id === product.id)
        let updatedOrder: OrderItem[] = [];
        if(productExists){
            updatedOrder = get().order.map(itm => {
                if(itm.id === product.id && itm.quantity < MAX_QUANTITY){
                    return {
                        ...itm,
                        quantity: itm.quantity + 1,
                        subtotal: (itm.quantity + 1) * product.price
                    }
                }
                return itm
            })
        }else {
            updatedOrder = [...get().order, {
                ...data,
                quantity: 1,
                subtotal: product.price
            }]
        }

        set({order: updatedOrder})
        
    },
    incrementQuantity: (id: number) => {
        const updateOrder = get().order.map(itm => {
            if(itm.id === id && itm.quantity < MAX_QUANTITY){
                return {
                    ...itm,
                    quantity: itm.quantity + 1,
                    subtotal: (itm.quantity + 1) * itm.price
                }
            }
            return itm
        })
        set({order: updateOrder})
    },
    decrementQuantity: (id: number) => {
        const updateOrder = get().order.map(itm => {
            if(itm.id === id && itm.quantity > MIN_QUANTITY){
                return {
                    ...itm,
                    quantity: itm.quantity - 1,
                    subtotal: (itm.quantity - 1) * itm.price
                }
            }
            return itm
        })
        set({order: updateOrder})
    },
    removeItem: (id: number) => {
        const updatedOrder = get().order.filter(itm => itm.id !== id)
        set({order: updatedOrder})
    },
    resetOrder: () => {
        set({order: []})
    }
}))