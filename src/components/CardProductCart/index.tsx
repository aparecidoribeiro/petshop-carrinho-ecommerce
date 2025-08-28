import { useContext } from "react";
import type { CardProductProps } from "../CardProduct";
import { CartContext, type CartProps } from "../../contexts/CartContext";



interface CardProductCartProps {
    item: CartProps
}

export function CardProductCart({ item }: CardProductCartProps) {

    return (
        <section className="flex items-center justify-between border rounded-md p-2 border-blue-400">
            <img
                className="w-28"
                src={item.cover}
                alt={item.title}
            />
            <strong>Preço: {item.price.toLocaleString('pt-BR', {
                style: "currency",
                currency: "BRL"
            })}</strong>

            <div className="flex gap-3">
                <button className="bg-blue-400 cursor-pointer text-white font-bold px-1 w-5 rounded flex items-center justify-center">+</button>
                {item.amount}
                <button className="bg-blue-400 cursor-pointer text-white font-bold px-1 w-5 rounded flex items-center justify-center">-</button>
            </div>

        </section>
    )
}