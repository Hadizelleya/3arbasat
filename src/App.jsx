import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import OneCategory from "./components/OneCategory";

export default function App() {
  return (
    <AnimatePresence mode="popLayout">
      <div className="w-full">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/3arbasat" element={<Home />} />
          <Route path="/3arbasat/products" element={<Products />} />
          <Route path="/3arbasat/about" element={<AboutPage />} />
          <Route path="/3arbasat/contact" element={<ContactPage />} />
          <Route
            path="/3arbasat/products/:categoryName"
            element={<OneCategory />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
