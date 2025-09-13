// src/Body.jsx
import React from "react";
import "./Body.css";

import shisha from "./data/Shisha";
import ashtrays from "./data/AshTray";
import vape from "./data/Vape";
import grinder from "./data/Grinder";
import accessories from "./data/Accessories";

import ProductCard from "./components/ProductCard"; // ✅ Import shared component

// Combine and shuffle
const allProducts = [
  ...shisha,
  ...ashtrays,
  ...vape,
  ...grinder,
  ...accessories,
];

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

const getRandomProducts = (n = 12) => shuffle(allProducts).slice(0, n);

export default function Body() {
  const randomProducts = getRandomProducts();

  return (
    <div className="BodyContainer">
      {randomProducts.map((item, idx) => (
        <ProductCard
          key={item.id || `${item.name}-${item.priceDisplay}-${idx}`}
          item={item}
          showVariants={false} // or just omit this prop since false is default
        />
      ))}
    </div>
  );
}
