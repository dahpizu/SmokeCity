import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import SearchResults from "./components/SearchResults";
import Shisha from "./components/Shisha";
import AshTray from "./components/AshTray";
import Grinder from "./components/Grinder";
import Vape from "./components/Vape";
import Accessories from "./components/Accessories";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import Account from "./components/Account";
import MyOrders from "./components/MyOrders";

import { CartProvider } from "./data/CartContext";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/shisha" element={<Shisha />} />
          <Route path="/ashtray" element={<AshTray />} />
          <Route path="/grinder" element={<Grinder />} />
          <Route path="/vape" element={<Vape />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
        <Footer />
      </>
    </CartProvider>
  );
}

export default App;
