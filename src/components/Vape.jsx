import React, { useState } from "react";
import vapeItems from "../data/Vape";
import { useCart } from "../data/CartContext";

import "../css/Vape.css";

function VapeProductCard({ item }) {
  const { addToCart } = useCart();
  const colors = item.colors || [];
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (colors.length === 0) {
    return <p>No colors available for "{item.name}".</p>;
  }

  const selectedColor = colors[selectedColorIndex];

  if (!selectedColor.images || selectedColor.images.length === 0) {
    return <p>No images available for selected color of "{item.name}".</p>;
  }

  function handleColorSelect(idx) {
    setSelectedColorIndex(idx);
    setSelectedImageIndex(0);
  }

  function handleAddToCart() {
    addToCart(item, selectedColorIndex);
  }

  return (
    <div className="VapeProductCard">
      <div className="VapeImageSection">
        <img
          src={selectedColor.images[selectedImageIndex]}
          alt={`${item.name} - ${selectedColor.name}`}
          className="VapeMainImage"
          onClick={() =>
            window.open(selectedColor.images[selectedImageIndex], "_blank")
          }
        />
        <div className="VapeThumbnailRow">
          {selectedColor.images.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={`Thumbnail ${idx}`}
              className={`VapeThumbnailImage ${
                idx === selectedImageIndex ? "selected" : ""
              }`}
              onClick={() => setSelectedImageIndex(idx)}
            />
          ))}
        </div>
      </div>

      <div className="VapeDetailsSection">
        <h2 className="VapeTitle">{item.name}</h2>
        <p className="VapePrice">{item.priceDisplay}</p>
        <p className="VapeDescription">
          {item.description.split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <div className="VapeColors">
          <p>Choose Flavor/Color:</p>
          <div className="VapeColorButtonsContainer">
            {colors.map((color, idx) => (
              <button
                key={color.name || color.code}
                className={`VapeColorButton ${
                  idx === selectedColorIndex ? "SelectedColor" : ""
                }`}
                style={{ backgroundColor: color.code }}
                onClick={() => handleColorSelect(idx)}
                title={color.name}
              />
            ))}
          </div>
        </div>

        <button className="VapeAddToCartBtn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function Vape() {
  if (!vapeItems || vapeItems.length === 0) {
    return <p>No vape products available.</p>;
  }

  return (
    <div className="VapeContainer">
      {vapeItems.map((item, idx) => (
        <VapeProductCard key={item.id ?? `${item.name}-${idx}`} item={item} />
      ))}
    </div>
  );
}
