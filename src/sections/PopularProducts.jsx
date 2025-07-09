// src/sections/PopularProducts.jsx
import React, { useRef, useEffect, useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaStar,
  FaRegStar,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import product1 from "../assets/model1.webp";
import product2 from "../assets/product10.jpg";
import product3 from "../assets/product5.jpg";
import product4 from "../assets/spec3.jpg";
import product5 from "../assets/product7.jpg";
import product6 from "../assets/spec2.jpg";
import product7 from "../assets/spec1.webp";
import product8 from "../assets/design3.jpg";
import product9 from "../assets/product8.jpg";
import product10 from "../assets/spec4.jpg";
import product11 from "../assets/product6.jpg";

const products = [
  { id: 1, name: "Cool Spectacles", price: "$49.99", rating: 4, image: product1, badge: "Hot" },
  { id: 2, name: "Summer Shades", price: "$39.99", rating: 5, image: product2, badge: "New" },
  { id: 3, name: "Classic Black Frame", price: "$59.99", rating: 3, image: product3, badge: "Hot" },
  { id: 4, name: "Modern Transparent", price: "$44.99", rating: 4, image: product4, badge: "New" },
  { id: 5, name: "Retro Look", price: "$54.99", rating: 4, image: product5, badge: "Hot" },
  { id: 6, name: "Luxury Gold", price: "$74.99", rating: 5, image: product6 },
  { id: 7, name: "Street Style", price: "$34.99", rating: 2, image: product7 },
  { id: 8, name: "Gamer Lens", price: "$45.00", rating: 3, image: product8, badge: "New" },
  { id: 9, name: "Study Glass", price: "$39.00", rating: 4, image: product9, badge: "Hot" },
  { id: 10, name: "Smart Wear", price: "$59.99", rating: 5, image: product10 },
  { id: 11, name: "Chic Urban", price: "$65.00", rating: 4, image: product11, badge: "New" },
];

export default function PopularProducts() {
  const scrollRef = useRef();
  const [liked, setLiked] = useState(() => {
    const init = {};
    // Mark the last two alternate products as liked
    for (let i = products.length - 1; i >= 0 && products.length - i <= 4; i -= 2) {
      init[products[i].id] = true;
    }
    return init;
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  const filteredProducts = products.filter((product) => {
    if (filter === "top") return product.rating >= 4;
    if (filter === "cheap") return parseFloat(product.price.replace("$", "")) < 50;
    return true;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        setCurrentIndex(prev => (prev + 1) % filteredProducts.length);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [filteredProducts]);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amt = dir === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amt, behavior: "smooth" });
      setCurrentIndex(prev => dir === "left"
        ? (prev - 1 + filteredProducts.length) % filteredProducts.length
        : (prev + 1) % filteredProducts.length);
    }
  };

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollToIndex = (idx) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 300 * idx, behavior: "smooth" });
      setCurrentIndex(idx);
    }
  };

  return (
    <section id="popular-products" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-100">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-indigo-800">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Popular Products
        </span>
      </h2>

      <div className="flex justify-center mb-8 space-x-4">
        <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-full font-medium ${filter === "all" ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border border-indigo-600"}`}>All</button>
        <button onClick={() => setFilter("top")} className={`px-4 py-2 rounded-full font-medium ${filter === "top" ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border border-indigo-600"}`}>Top Rated</button>
        <button onClick={() => setFilter("cheap")} className={`px-4 py-2 rounded-full font-medium ${filter === "cheap" ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border border-indigo-600"}`}>Under $50</button>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10">
          <button onClick={() => scroll("left")} className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"><FaArrowLeft /></button>
        </div>
        <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
          <button onClick={() => scroll("right")} className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"><FaArrowRight /></button>
        </div>

        <div ref={scrollRef} className="flex overflow-hidden space-x-6 pb-4 scroll-smooth">
          {filteredProducts.map(product => (
            <div key={product.id} onClick={() => setSelectedProduct(product)} className="min-w-[250px] bg-gradient-to-b from-white via-indigo-100 to-purple-200 shadow-2xl rounded-3xl p-4 flex-shrink-0 relative group transition duration-300 hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {product.badge && (
                <div className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded-full animate-pulse ${product.badge === "Hot" ? "bg-red-500" : "bg-green-500"}`}>
                  {product.badge}
                </div>
              )}
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain rounded-2xl" />
              <h3 className="text-lg font-bold text-indigo-800 mt-2">{product.name}</h3>
              <p className="text-pink-600 font-semibold">{product.price}</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => i < product.rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-yellow-400" />)}
              </div>
              <div className="flex justify-between items-center mt-4">
                <button onClick={e => { e.stopPropagation(); toggleLike(product.id); }} className="text-xl transition">
                  {liked[product.id] ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
                </button>
                <button onClick={e => { e.stopPropagation(); handleAddToCart(product); }} className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition">
                  <FaShoppingCart className="inline mr-1" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {filteredProducts.map((_, i) => (
            <button key={i} onClick={() => scrollToIndex(i)} className={`w-3 h-3 rounded-full transform transition-transform duration-300 ${i === currentIndex ? "bg-indigo-600 scale-150" : "bg-indigo-300 scale-100"}`}></button>
          ))}
        </div>

        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center relative">
              <button onClick={() => setSelectedProduct(null)} className="absolute top-2 right-2 text-xl text-gray-500">✖</button>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-48 object-contain mb-4 rounded-xl" />
              <h3 className="text-xl font-bold text-indigo-800 mb-2">{selectedProduct.name}</h3>
              <p className="text-pink-600 font-semibold mb-2">{selectedProduct.price}</p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => i < selectedProduct.rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-yellow-400" />)}
              </div>
              <button onClick={() => handleAddToCart(selectedProduct)} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                <FaShoppingCart className="inline mr-1" /> Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
