import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import SpecialOffer from "./sections/SpecialOffer";
import PopularProducts from "./sections/PopularProducts";
import CustomerReviews from "./sections/CustomerReviews";
import Contact from "./sections/Contact";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import ChatWidget from "./components/ChatWidget";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ import
import Footer from "./sections/Footer";
export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Routes>
        <Route path="/signin" element={<SignIn />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Hero />
                <About />
                <SpecialOffer />
                <PopularProducts />
                <CustomerReviews />
                <Contact />
                <ChatWidget />
                <Footer/>
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Cart />
                <ChatWidget />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
