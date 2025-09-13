// src/components/ShoppingCart.jsx
import React from "react";
import "../css/ShoppingCart.css";
import { useCart } from "../data/CartContext";
import { useNavigate } from "react-router-dom";

export default function ShoppingCart({ onClose }) {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const navigate = useNavigate();

  // Calculate total cart value
  const calculateTotal = () =>
    cart.reduce((sum, item) => {
      const price =
        parseFloat(item.product.priceDisplay.replace(/[^0-9.]/g, "")) || 0;
      return sum + price * item.quantity;
    }, 0);

  // Handle clicking the checkout button
  const handleCheckout = () => {
    onClose(); // Close cart sidebar first
    navigate("/checkout"); // Navigate to checkout page
  };

  return (
    <>
      {/* Overlay behind the cart */}
      <div
        className="ShoppingCartOverlay open"
        onClick={onClose}
        aria-label="Close shopping cart overlay"
      />

      {/* Cart sidebar */}
      <aside
        className="ShoppingCartSidebar open"
        aria-modal="true"
        role="dialog"
        aria-labelledby="cart-heading"
      >
        {/* Header with title and close button */}
        <header className="CartHeader">
          <h2 id="cart-heading">Your Cart</h2>
          <button
            className="CloseBtn"
            onClick={onClose}
            aria-label="Close Cart"
            type="button"
          >
            ×
          </button>
        </header>

        {/* Cart items list */}
        <div className="CartItems" role="list">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => {
              const price =
                parseFloat(item.product.priceDisplay.replace(/[^0-9.]/g, "")) ||
                0;
              const colorName =
                item.product.colors?.[item.selectedColorIndex]?.name || "";

              return (
                <div
                  className="CartItem"
                  key={`${item.product.id}-${item.selectedColorIndex}-${item.selectedVariantIndex}`}
                  role="listitem"
                >
                  <div className="ItemInfo">
                    <p className="ItemName">
                      {item.product.name}
                      {colorName && ` (${colorName})`}
                    </p>

                    {/* Quantity controls */}
                    <div className="QuantityRow">
                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.product.id,
                            item.selectedColorIndex,
                            item.selectedVariantIndex
                          )
                        }
                        className="QtyBtn"
                        aria-label={`Decrease quantity of ${item.product.name}`}
                        type="button"
                      >
                        -
                      </button>
                      <span className="QtyCount" aria-live="polite">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.product.id,
                            item.selectedColorIndex,
                            item.selectedVariantIndex
                          )
                        }
                        className="QtyBtn"
                        aria-label={`Increase quantity of ${item.product.name}`}
                        type="button"
                      >
                        +
                      </button>
                    </div>

                    <p>
                      ₦{price.toLocaleString()} × {item.quantity} ={" "}
                      <strong>
                        ₦{(price * item.quantity).toLocaleString()}
                      </strong>
                    </p>
                  </div>

                  {/* Remove item button */}
                  <button
                    className="RemoveBtn"
                    onClick={() =>
                      removeFromCart(
                        item.product.id,
                        item.selectedColorIndex,
                        item.selectedVariantIndex
                      )
                    }
                    aria-label={`Remove ${item.product.name} from cart`}
                    type="button"
                  >
                    ×
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Cart footer with total and checkout */}
        {cart.length > 0 && (
          <footer className="CartFooter">
            <p>Total: ₦{calculateTotal().toLocaleString()}</p>
            <button
              className="CheckoutBtn"
              onClick={handleCheckout}
              type="button"
              aria-label="Proceed to checkout"
            >
              Checkout
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
