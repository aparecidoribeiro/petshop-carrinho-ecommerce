import { Link } from "react-router"
import { CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export const Header = () => {

    const { cartAmount } = useContext(CartContext)

    return (
        <header className="w-full bg-blue-400">
            <nav className="w-full max-w-7xl px-8 h-15 mx-auto flex justify-between items-center">
                <Link
                    className="text-2xl font-bold text-white"
                    to={'/'}
                >
                    Pet Shop
                </Link>
                <Link
                    className="relative"
                    to={'/cart'}
                >
                    <CiShoppingCart
                        size={30}
                        color="#fff"
                    />
                    {cartAmount > 0 && (
                        <span className="absolute w-5 h-5 px-2.5 text-[11px] font-medium rounded-full flex justify-center items-center bg-blue-900 text-white bottom-3 left-3">{cartAmount}</span>
                    )}
                </Link>
            </nav>
        </header>
    )
}