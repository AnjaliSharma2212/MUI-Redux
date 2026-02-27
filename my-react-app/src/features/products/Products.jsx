import { useDispatch, useSelector } from "react-redux"
import { selectFilteredProducts } from "./productsSelectors"
import { useEffect } from "react"
import { fetchProducts } from "./productsSlice"
import ProductCard from "../../components/ProductCard"

const Products=()=>{
    const dispatch= useDispatch()
    const products= useSelector(selectFilteredProducts)
    const status= useSelector((state)=> state.products.status)


    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    if(status==="loading") return <p>Loading...</p>

    return (
        <div className="p-3 m-5 flex flex-wrap justify-center gap-5">
            {products.map((p)=>(
                <ProductCard key={p.id} product={p}/>
            ))}
        </div>
    )
}

export default Products