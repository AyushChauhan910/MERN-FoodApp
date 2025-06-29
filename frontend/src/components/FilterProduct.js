import React from "react";

function FilterProduct({ categories, selected, onSelect }) {
  return (
    <div className="flex gap-2 flex-wrap my-4">
      <button
        className={`px-3 py-1 rounded ${selected === "" ? "bg-pink-600 text-white" : "bg-gray-200"}`}
        onClick={() => onSelect("")}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-3 py-1 rounded ${selected === cat ? "bg-pink-600 text-white" : "bg-gray-200"}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FilterProduct;
