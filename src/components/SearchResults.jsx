// src/pages/SearchResults.jsx
import React from "react";
import { useLocation } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import shisha from "../data/Shisha";
import vape from "../data/Vape";
import grinder from "../data/Grinder";
import ashtray from "../data/AshTray";
import accessories from "../data/Accessories";

const allProducts = [
  ...shisha,
  ...vape,
  ...grinder,
  ...ashtray,
  ...accessories,
];

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

export default function SearchResults() {
  const query = useQuery();
  const keyword = query.get("q")?.toLowerCase() || "";

  const results = allProducts.filter((product) =>
    product.name.toLowerCase().includes(keyword)
  );

  return (
    <div className="BodyContainer">
      <h2 style={{ marginBottom: "1rem" }}>
        Search results for: "<em>{keyword}</em>"
      </h2>
      {results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        results.map((item, idx) => (
          <ProductCard
            key={item.id || `${item.name}-${idx}`}
            item={item}
            showVariants={false}
          />
        ))
      )}
    </div>
  );
}
