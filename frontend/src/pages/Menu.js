import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart } from "../redux/productSlice";
import AllProduct from "../components/AllProduct";
import FilterProduct from "../components/FilterProduct";

function Menu() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = [...new Set(products.map((p) => p.category))];

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div>
      <h2 className="text-2xl  text-pink-600 font-bold mb-4">Our Menu</h2>
      <FilterProduct categories={categories} selected={category} onSelect={setCategory} />
      {loading ? (
        <div className="text-pink-200">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <AllProduct key={product._id} product={product} onAdd={handleAdd} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
