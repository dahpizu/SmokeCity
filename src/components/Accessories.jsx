import React from "react";
import accessoriesItems from "../data/Accessories";
import ProductCard from "./ProductCard";
import "../css/Accessories.css";

export default function Accessories() {
  if (!accessoriesItems || accessoriesItems.length === 0) {
    return <p>No accessories found.</p>;
  }

  return (
    <div className="AccessoriesContainer">
      {accessoriesItems.map((item, idx) => (
        <ProductCard key={item.id ?? `${item.name}-${idx}`} item={item} />
      ))}
    </div>
  );
}
