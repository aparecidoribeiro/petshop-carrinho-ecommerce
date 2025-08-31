import { useContext } from "react"
import { Link } from "react-router"
import { CartContext } from "../../contexts/CartContext"
import { CardProductCart } from "../../components/CardProductCart"


export const Cart = () => {

    const { cart, total } = useContext(CartContext)

    return (
        <main className="w-full max-w-7xl mx-auto px-5 pb-10">
            <h1 className="font-medium text-2xl mt-10 text-center mb-10">Produtos no carrinho</h1>
            {cart.length === 0 && (
                <div className='flex flex-col items-center justify-center mt-10'>
                    <p className='font-medium'>Nenhum produto no carrinho...</p>
                    <Link to={'/'} className='bg-blue-400 my-3 p-1 px-3 text-white font-medium rounded transition-colors hover:bg-blue-500'>
                        Acessar produtos
                    </Link>
                </div>
            )}

            <div className="w-full flex flex-col gap-3 mb-4">
                {cart.map(item => (
                    <CardProductCart
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
            {cart.length > 0 && <strong>Total: {total}</strong>}
        </main>
    )
}