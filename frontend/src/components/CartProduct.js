import React from "react";

function CartProduct({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center justify-between border-b py-3">
      <div className="flex items-center gap-3">
        <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded" />
        <div>
          <h4 className="font-semibold">{item.name}</h4>
          <span className="text-pink-600 font-bold">₹{item.price}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => onDecrease(item._id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
        <span>{item.qty}</span>
        <button onClick={() => onIncrease(item._id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
      </div>
      <button onClick={() => onRemove(item._id)} className="text-red-600 hover:underline">Remove</button>
    </div>
  );
}

export default CartProduct;
