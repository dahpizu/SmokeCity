import React from "react";
import grinderItems from "../data/Grinder";
import ProductCard from "./ProductCard";
import "../css/Grinder.css";

export default function Grinder() {
  if (!grinderItems || grinderItems.length === 0) {
    return <p>No Grinder products found.</p>;
  }

  return (
    <div className="GrinderContainer">
      {grinderItems.map((item, idx) => (
        <ProductCard key={item.id ?? `${item.name}-${idx}`} item={item} />
      ))}
    </div>
  );
}
