import React from "react";
import ashTrayItems from "../data/AshTray";
import ProductCard from "./ProductCard";
import "../css/AshTray.css";

export default function AshTray() {
  if (!ashTrayItems || ashTrayItems.length === 0) {
    return <p>No Ash Tray products found.</p>;
  }

  return (
    <div className="AshTrayContainer">
      {ashTrayItems.map((item, idx) => (
        <ProductCard key={item.id ?? `${item.name}-${idx}`} item={item} />
      ))}
    </div>
  );
}
