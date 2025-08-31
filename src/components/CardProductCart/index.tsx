
import { useContext } from "react";
import { CartContext, type CartProps } from "../../contexts/CartContext";
import { Link } from "react-router";


interface CardProductCartProps {
    item: CartProps,
}

export function CardProductCart({ item }: CardProductCartProps) {


    const { addItemCart, removeItemCart } = useContext(CartContext)

    return (
        <section className="flex items-center flex-col gap-2 justify-between border rounded-md py-2 px-3 border-blue-400 md:flex-row">
            <Link to={`/product/${item.id}`}>
                <img
                    className="w-28"
                    src={item.cover}
                    alt={item.title}
                />
            </Link>
            <strong>Preço: {item.price.toLocaleString('pt-BR', {
                style: "currency",
                currency: "BRL"
            })}</strong>

            <div className="flex items-center justify-center gap-3">
                <button
                    onClick={() => removeItemCart(item)}
                    className="bg-blue-400 cursor-pointer text-white font-bold px-2 rounded flex items-center justify-center">-</button>
                {item.amount}
                <button
                    onClick={() => addItemCart(item)}
                    className="bg-blue-400 cursor-pointer text-white font-bold px-2 rounded flex items-center justify-center">+</button>
            </div>
            <strong className="float-right" >
                SubTotal: {item.total.toLocaleString('pt-BR', {
                    style: "currency",
                    currency: "BRL"
                })}
            </strong>

        </section >
    )
}