import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

function Header() {
  const { token, role } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="bg-fuchsia-200 shadow sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-pink-600">Feastly </Link>
        <div className="flex items-center gap-4">
          <Link to="/menu" className="hover:text-pink-600 text-gray-800 font-medium" >Menu</Link>
          <Link to="/about" className="hover:text-pink-600  text-gray-800 font-medium">About</Link>
          <Link to="/contact" className="hover:text-pink-600  text-gray-800 font-medium">Contact</Link>
          {role === "admin" && (
            <Link to="/new-product" className="hover:text-pink-600  text-gray-800 font-medium">Add Product</Link>
          )}
        </div>
        <div className="flex items-center gap-4">
          <Link to="/cart" className="animate-bounce relative">
            <svg className="w-6 h-6  text-gray-800 " fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
          </Link>
          {token ? (
            <>
              <button onClick={handleLogout} className="bg-pink-600 text-gray-800 ont-medium px-3 py-1 rounded hover:bg-pink-700">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-pink-600 text-gray-800 font-medium ">Login</Link>
              <Link to="/signup" className="hover:text-pink-600  text-gray-800 font-medium">Signup</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
