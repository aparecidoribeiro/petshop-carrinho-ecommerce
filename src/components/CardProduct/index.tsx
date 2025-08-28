import { Link } from "react-router"
import type { ProductsProps } from "../../pages/Home"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"


export type CardProductProps = {
    item: ProductsProps
}

export const CardProduct = ({ item }: CardProductProps) => {

    const { addItemCart } = useContext(CartContext)

    return (
        <section className="border rounded-md p-3 border-blue-400 ">
            <Link to={`/product/${item.id}`}>
                <img
                    className="w-full mb-2 max-h-70 object-contain hover:scale-105 transition-transform"
                    src={item.cover}
                    alt={item.title}
                />
            </Link>
            <span>
                <Link to={`/product/${item.id}`}>
                    <h2 className="font-medium text-lg mb-1 line-clamp-2">{item.title}</h2>
                </Link>
                <p className="line-clamp-3 mb-2">{item.description}</p>
                <p className="font-bold">
                    {item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </p>
                <button
                    className="bg-blue-400 text-white w-full p-2 rounded cursor-pointer mt-2 hover:bg-blue-500 transition-colors"
                    onClick={() => addItemCart(item)}
                >
                    Adicionar ao carrinho
                </button>
            </span>
        </section>
    )
}