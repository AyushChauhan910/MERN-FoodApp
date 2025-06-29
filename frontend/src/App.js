import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OrderSummary from "./pages/OrderSummary";
import NewProduct from "./pages/NewProduct";
import { useSelector } from "react-redux";

function PrivateRoute({ children, adminOnly }) {
  const { token, role } = useSelector((state) => state.user);
  if (!token) return <Navigate to="/login" />;
  if (adminOnly && role !== "admin") return <Navigate to="/" />;
  return children;
}

function App() {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-2 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/order/:id" element={<OrderSummary />} />
          <Route path="/new-product" element={
            <PrivateRoute adminOnly>
              <NewProduct />
            </PrivateRoute>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
