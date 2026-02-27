import { useSelector } from "react-redux"
import { selectTotal } from "../features/cart/cartSlice"
import { Link } from "react-router-dom"

 const  Header=()=>{
    const cartItems= useSelector((state)=> state.cart.items)
    const total= useSelector(selectTotal)

    return(

            <header className="bg-black text-white p-5 flex justify-between">
      <Link to="/" className="text-lg font-semibold">
        Redux Store
      </Link>

      <Link to="/cart">
        Cart ({cartItems.length})  | Total: ${total.toFixed(2)}
      </Link>
    </header>
    )
}

export default Header