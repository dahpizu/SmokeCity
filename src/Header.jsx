// src/Header.jsx
import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

import ShoppingCart from "./components/ShoppingCart";
import { useCart } from "./data/CartContext";

import "./header.css";

function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleCart = () => setCartOpen((open) => !open);
  const closeCart = () => setCartOpen(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // Clear search box
    }
  };

  return (
    <div className="Header">
      <div className="LogoContainer">
        <Link to="/">
          <img
            src="/images/SmokeCityLogo.JPG"
            alt="Smoke City Logo"
            className="Logo"
          />
        </Link>
        <div className="LogoText">
          <h1 className="LogoName">SMOKE CITY</h1>
          <nav className="dropdown-menu">
            <Link to="/shisha">Shisha/Hookah</Link>
            <Link to="/ashtray">Ash-Tray</Link>
            <Link to="/grinder">Grinder</Link>
            <Link to="/vape">Vape</Link>
            <Link to="/accessories">Accessories</Link>
          </nav>
        </div>
      </div>

      <div className="RightSection">
        <form className="SearchBar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="SearchIcon" aria-label="Search">
            <CiSearch />
          </button>
        </form>

        <div className="HeadIcons">
          <Link to="/account">
            <MdAccountCircle className="HeaderIcon" />
          </Link>

          <button
            className="CartToggleBtn"
            onClick={toggleCart}
            aria-label="Toggle shopping cart"
            style={{ position: "relative" }}
          >
            🛒
            {totalItems > 0 && (
              <span className="CartItemCountBadge">{totalItems}</span>
            )}
          </button>
        </div>
      </div>

      {cartOpen && <ShoppingCart onClose={closeCart} />}
    </div>
  );
}

export default Header;
