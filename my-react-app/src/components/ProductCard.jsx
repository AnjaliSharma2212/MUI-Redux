import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
   <div className="w-64 m-5 p-5 flex flex-col items-center rounded-xl bg-white shadow-md hover:shadow-2xl transition duration-300 ease-out hover:-translate-y-1">
  
  <img
    className="h-40 object-contain mb-4"
    src={product.image}
    alt={product.title}
  />

  <h4 className="text-sm font-medium text-gray-700 text-center line-clamp-2 mb-2">
    {product.title}
  </h4>

  <p className="text-lg font-semibold text-gray-900 mb-3">
    ${product.price}
  </p>

  <button
    className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-200"
    onClick={() => dispatch(addToCart(product))}
  >
    Add to Cart
  </button>

</div>
  );
};

export default ProductCard;