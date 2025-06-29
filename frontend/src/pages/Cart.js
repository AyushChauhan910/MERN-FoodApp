import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartProduct from "../components/CartProduct";
import { removeFromCart, increaseQty, decreaseQty, clearCart } from "../redux/productSlice";

function Cart() {
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold text-pink-600 mb-2">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div>
        {cart.map((item) => (
          <CartProduct
            key={item._id}
            item={item}
            onRemove={() => dispatch(removeFromCart(item._id))}
            onIncrease={() => dispatch(increaseQty(item._id))}
            onDecrease={() => dispatch(decreaseQty(item._id))}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <span className="font-semibold text-lg">Total:</span>
        <span className="text-pink-600 font-bold text-xl">₹{total}</span>
      </div>
      <button
        className="w-full mt-4 bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
        onClick={() => {
          alert("Order placed! (Checkout logic to be implemented)");
          dispatch(clearCart());
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Cart;
