// src/pages/Cart.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const [showCard, setShowCard] = useState(false);
  const [justBought, setJustBought] = useState(null);

  const handleBuyNow = (item) => {
    setJustBought(item);
    setShowCard(true);

    setTimeout(() => {
      setShowCard(false);
      setJustBought(null);
    }, 2500); // card disappears after 2.5 seconds
  };

  return (
    <div className="min-h-screen bg-purple-50 p-8 relative">
      <h2 className="text-3xl font-bold text-indigo-800 mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty 😕</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-md">
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-contain rounded"
              />
              <h3 className="text-lg font-bold mt-2 text-indigo-700">
                {item.name}
              </h3>
              <p className="text-pink-600 font-semibold">{item.price}</p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  className="text-red-500 hover:text-red-700 flex items-center"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash className="mr-1" /> Delete
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition"
                  onClick={() => handleBuyNow(item)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 😊 Thank You Card */}
      {showCard && justBought && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 mt-20">
          <div className="bg-white border-2 border-green-500 p-6 rounded-xl shadow-2xl max-w-sm w-full text-center animate-bounce-in">
            <div className="text-5xl mb-3">😊</div>
            <h3 className="text-xl font-bold text-indigo-700 mb-1">
              Thanks for buying!
            </h3>
            <p className="text-gray-600">
              <strong>{justBought.name}</strong> has been ordered 🎉
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
