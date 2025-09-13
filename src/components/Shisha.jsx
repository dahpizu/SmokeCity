// Shisha.jsx
import React from "react";
import shishaItems from "../data/Shisha";
import ProductCard from "../components/ProductCard"; // ✅ ensure correct path
import "../css/Shisha.css";

export default function Shisha() {
  if (!shishaItems || shishaItems.length === 0) {
    return <p>No Shisha products found.</p>;
  }

  return (
    <div className="ShishaContainer">
      {shishaItems.map((item, idx) => (
        <ProductCard
          key={item.id ?? `${item.name}-${idx}`}
          item={item}
          showVariants={true} // ✅ only Shisha has this
        />
      ))}
    </div>
  );
}
