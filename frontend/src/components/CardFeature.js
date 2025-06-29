import React from "react";

function CardFeature({ product, onAdd }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all">
      <img src={product.image} alt={product.name} className="h-32 w-full object-cover rounded-t-lg" />
      <div className="p-3">
        <h3 className="font-semibold">{product.name}</h3>
        <span className="text-pink-600 font-bold">₹{product.price}</span>
        <button
          className="block mt-2 bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700"
          onClick={() => onAdd(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CardFeature;
