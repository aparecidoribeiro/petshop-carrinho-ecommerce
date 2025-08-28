import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { api } from "../../services/api"
import type { ProductsProps } from "../Home"


export const Details = () => {


    const [product, setProduct] = useState<ProductsProps>()
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        async function getProduct() {
            const response = await api.get(`/products/${id}`)

            setProduct(response.data)
            setLoading(false)

        }

        getProduct()
    }, [id])

    {
        if (loading) {
            return (
                <div className="w-full flex justify-center mt-10">
                    <p>Carregando...</p>
                </div>
            )
        }
    }

    return (
        <main className="w-full max-w-7xl px-8 flex flex-col items-center mx-auto pt-10">
            <div className="flex flex-col items-center justify-center max-w-5xl md:flex-row">
                <img
                    className="w-full max-h-90 flex-1 object-contain"
                    src={product?.cover}
                    alt={product?.title}
                />
                <div className="flex-2">
                    <h1 className="font-medium text-3xl mb-3">{product?.title}</h1>
                    <p className="mb-2">{product?.description}</p>
                    <p
                        className="font-medium text-xl"
                    >{product?.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}</p>
                    <button
                        className="bg-blue-400 text-white w-full p-2 rounded cursor-pointer mt-3 hover:bg-blue-500 transition-colors"
                    >
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </main>
    )
}