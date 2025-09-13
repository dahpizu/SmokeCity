// src/components/ProductCard.js
import React, { useState, useEffect } from "react";
import "../css/ProductCard.css";
import { useCart } from "../data/CartContext";

export default function ProductCard({ item, showVariants }) {
  const { addToCart } = useCart();

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const colors = item.colors || [];
  const selectedColor = colors[selectedColorIndex] || { images: [] };
  const images = selectedColor.images || [];

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [selectedColorIndex]);

  useEffect(() => {
    setSelectedVariantIndex(0);
  }, [item.variants]);

  return (
    <div className="ProductCard">
      {/* Image Section */}
      <div className="ImageSection">
        {images.length > 0 && (
          <img
            src={images[selectedImageIndex]}
            alt={`${item.name} - ${selectedColor.name || ""}`}
            className="MainImage"
          />
        )}

        <div className="ThumbnailRow">
          {images.map((imgSrc) => (
            <img
              key={imgSrc}
              src={imgSrc}
              alt={`Thumbnail for ${item.name}`}
              className={`ThumbnailImage ${
                selectedImageIndex === images.indexOf(imgSrc) ? "selected" : ""
              }`}
              onClick={() => setSelectedImageIndex(images.indexOf(imgSrc))}
            />
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="DetailsSection">
        <h3 className="ProductTitle">{item.name}</h3>
        <p className="ProductPrice">{item.priceDisplay}</p>
        <p className="ProductDescription">{item.description}</p>

        {/* Color Options */}
        {colors.length > 1 && (
          <div className="ColorsSection">
            <p>Colors:</p>
            <div className="ColorButtonsContainer">
              {colors.map((color, idx) => (
                <button
                  key={color.code || `${color.name}-${idx}`}
                  className={`ColorButton ${
                    selectedColorIndex === idx ? "SelectedColor" : ""
                  }`}
                  style={{ backgroundColor: color.code || "#ccc" }}
                  onClick={() => setSelectedColorIndex(idx)}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* Variant Options */}
        {showVariants && item.variants?.length > 0 && (
          <div className="VariantsSection">
            <p>Variants:</p>
            <div className="VariantButtonsContainer">
              {item.variants.map((variant, idx) => (
                <button
                  key={variant.type || idx}
                  className={`VariantButton ${
                    selectedVariantIndex === idx ? "SelectedVariant" : ""
                  }`}
                  onClick={() => setSelectedVariantIndex(idx)}
                >
                  {variant.type}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          className="AddToCartBtn"
          onClick={() => {
            console.log("Button clicked");
            addToCart(item, selectedColorIndex, selectedVariantIndex);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
