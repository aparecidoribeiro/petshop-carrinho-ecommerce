import { createContext, useState, type ReactNode } from "react";
import type { ProductsProps } from "../pages/Home";

interface CartContextProps {
    cart: CartProps[],
    cartAmount: number,
    total: string,
    addItemCart: (newItem: ProductsProps) => void,
    removeItemCart: (product: CartProps) => void
}


export interface CartProps extends ProductsProps {
    amount: number,
    total: number
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

function CartProvider({ children }: CartProviderProps) {

    const [cart, setCart] = useState<CartProps[]>([])
    const [total, setTotal] = useState("")


    function addItemCart(newItem: ProductsProps) {

        const findIndex = cart.findIndex(item => item.id === newItem.id)

        if (findIndex !== -1) {
            //Produto já esta no carrinho

            let cartList = cart

            cartList[findIndex].amount = cartList[findIndex].amount + 1
            cartList[findIndex].total = cartList[findIndex].amount * cartList[findIndex].price

            setCart(cartList)
            totalCart(cartList)

        }
        else {
            //Produto não está  no carrinho
            let data = {
                ...newItem,
                amount: 1,
                total: newItem.price
            }

            setCart(products => [...products, data])
            totalCart([...cart, data])

        }
    }

    function removeItemCart(product: CartProps) {

        const findIndex = cart.findIndex(item => item.id === product.id)

        if (cart[findIndex].amount > 1) {

            let cartList = cart

            cartList[findIndex].amount = cartList[findIndex].amount - 1
            cartList[findIndex].total = cartList[findIndex].amount * cartList[findIndex].price

            setCart(cartList)
            totalCart(cartList)
        }
        else {
            const removeItem = cart.filter(item => item.id !== product.id)

            setCart(removeItem)
            totalCart(removeItem)
        }

    }

    function totalCart(itens: CartProps[]) {

        let myCart = itens

        let result = myCart.reduce((acc, obj) => { return acc + obj.total }, 0)
        let formatResult = result.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        setTotal(formatResult)

    }

    return (
        <CartContext.Provider
            value={{
                cart,
                cartAmount: cart.length,
                total,
                addItemCart,
                removeItemCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider