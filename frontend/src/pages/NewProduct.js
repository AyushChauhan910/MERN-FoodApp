import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../redux/productSlice";

function NewProduct() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.product);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createProduct({ ...form, price: Number(form.price) }));
    setForm({ name: "", category: "", image: "", price: "", description: "" });
    alert("Product added!");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          name="category"
          required
          placeholder="Category (e.g., Pizza, Burger)"
          value={form.category}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        <input
          type="url"
          name="image"
          required
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        <input
          type="number"
          name="price"
          required
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        <textarea
          name="description"
          required
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default NewProduct;
