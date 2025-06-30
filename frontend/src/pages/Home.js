import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart } from "../redux/productSlice";
import HomeCard from "../components/HomeCard";

function Home() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-2">Welcome to Feastly!</h1>
        <p className="text-pink-200 text-2xl mb-4">Delicious food delivered to your door.</p>
      </section>
      <h2 className="text-2xl text-pink-600 font-bold mb-4">Featured</h2>
      {loading ? (
        <div className="text-pink-200">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
            <HomeCard key={product._id} product={product} onAdd={handleAdd} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
