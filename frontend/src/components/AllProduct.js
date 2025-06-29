import React from "react";

function AllProduct({ product, onAdd }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-500">{product.category}</p>
        <p className="text-sm mt-1">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-pink-600 font-bold text-xl">₹{product.price}</span>
          <button
            className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700"
            onClick={() => onAdd(product)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
