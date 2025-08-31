import { useEffect, useState } from "react"
import { CardProduct } from "../../components/CardProduct"
import { api } from "../../services/api"


export interface ProductsProps {
    id: number,
    title: string,
    description: string,
    price: number,
    cover: string,
}

export const Home = () => {

    const [products, setProducts] = useState<ProductsProps[]>()

    useEffect(() => {
        async function getProducts() {
            const response = await api.get('/products')

            setProducts(response.data)
        }

        getProducts()
    }, [])

    return (
        <main className="w-full max-w-7xl min-h-screen px-8 flex flex-col items-center mx-auto pb-10">
            <h1 className="mt-10 font-bold text-2xl text-center">Produtos disponíveis</h1>
            <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {
                    products?.map(product => (
                        <CardProduct
                            key={product.id}
                            item={product}
                        />
                    ))
                }
            </div>
        </main>
    )
}