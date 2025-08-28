import { createContext, useState, type ReactNode } from "react";
import type { ProductsProps } from "../pages/Home";

interface CartContextProps {
    cart: CartProps[],
    cartAmount: number,
    addItemCart: (newItem: ProductsProps) => void
}

interface CartProviderProps {
    children: ReactNode
}

export interface CartProps extends ProductsProps {
    amount: number,
    total: number
}

export const CartContext = createContext({} as CartContextProps)

function CartProvider({ children }: CartProviderProps) {

    const [cart, setCart] = useState<CartProps[]>([])

    function addItemCart(newItem: ProductsProps) {

        const findIndex = cart.findIndex(item => item.id === newItem.id)

        if (findIndex !== -1) {
            //Produto já esta no carrinho

            let cartList = cart

            cartList[findIndex].amount = cartList[findIndex].amount + 1
            cartList[findIndex].total = cartList[findIndex].amount * cartList[findIndex].price

            setCart(cart)

        }
        else {
            //Produto não está  no carrinho
            let data = {
                ...newItem,
                amount: 1,
                total: newItem.price
            }

            setCart(products => [...products, data])

        }

    }

    return (
        <CartContext.Provider
            value={{
                cart,
                cartAmount: cart?.length,
                addItemCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider