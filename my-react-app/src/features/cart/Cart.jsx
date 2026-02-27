import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseOty, increaseQty, removeFromCart, selectTotal } from "./cartSlice";


const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector(selectTotal);

  if (items.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-xl text-gray-500">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-5 rounded-xl shadow-md"
          >
            <div className="flex items-center gap-6">
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-contain"
              />

              <div>
                <h4 className="font-medium text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  ${item.price}
                </p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(decreaseOty(item.id))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>

              <span className="font-medium">
                {item.quantity}
              </span>

              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
        <h3 className="text-lg font-semibold">
          Total: ${total.toFixed(2)}
        </h3>

        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;