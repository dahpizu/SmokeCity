// src/components/Checkout.jsx
import React, { useState, useEffect } from "react";
import { useCart } from "../data/CartContext";
import "../css/Checkout.css";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [proofOfPayment, setProofOfPayment] = useState(null);
  const [fileName, setFileName] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setFormData(JSON.parse(storedUser));
    }
  }, []);

  const calculateTotal = () =>
    cart.reduce((sum, item) => {
      const price =
        parseFloat(item.product.priceDisplay.replace(/[^0-9.]/g, "")) || 0;
      return sum + price * item.quantity;
    }, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setProofOfPayment(file);
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (paymentMethod === "bank" && !proofOfPayment) {
      alert("Please upload proof of payment before placing the order.");
      return;
    }

    const orders = JSON.parse(localStorage.getItem("orders") || "[]");

    const newOrder = {
      id: Date.now(),
      items: cart.map((item) => ({
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.priceDisplay,
      })),
      total: calculateTotal(),
      deliveryDetails: formData,
      paymentMethod,
      status: paymentMethod === "cash" ? "Pending Delivery" : "Pending Payment",
      proofOfPayment: proofOfPayment
        ? URL.createObjectURL(proofOfPayment)
        : null,
      createdAt: new Date().toISOString(),
    };

    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Clear cart after order
    clearCart();

    setOrderPlaced(true);
    alert(`Order placed successfully!`);

    // ✅ Redirect to My Orders page
    window.location.href = "/my-orders";
  };

  return (
    <div className="CheckoutContainer">
      <h2>Checkout</h2>
      <form className="CheckoutForm" onSubmit={handlePlaceOrder}>
        <div className="FormSection">
          <h3>Delivery Details</h3>
          <button
            type="button"
            className="EditBtn"
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? "Cancel" : "Change Address"}
          </button>
          <p>{formData.fullName}</p>
          <p>{formData.address}</p>
          <p>{formData.phone}</p>
        </div>

        <div className="SummarySection">
          <h3>Order Summary</h3>
          {cart.map((item) => {
            const price =
              parseFloat(item.product.priceDisplay.replace(/[^0-9.]/g, "")) ||
              0;
            const total = price * item.quantity;
            return (
              <div key={item.product.id} className="SummaryItem">
                <span>
                  {item.product.name} × {item.quantity}
                </span>
                <span>₦{total.toLocaleString()}</span>
              </div>
            );
          })}
          <hr />
          <div className="SummaryTotal">
            <strong>Total:</strong>
            <strong>₦{calculateTotal().toLocaleString()}</strong>
          </div>
        </div>

        <div className="PaymentSection">
          <h3>Payment Method</h3>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="bank"
              checked={paymentMethod === "bank"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Bank Transfer
          </label>

          {paymentMethod === "bank" && (
            <>
              <div className="BankDetails">
                <strong>Bank Transfer Details:</strong>
                <p>Account Name: Your Business Name</p>
                <p>Account Number: 1234567890</p>
                <p>Bank: Your Bank</p>
                <p>
                  Please transfer the total amount and confirm below before
                  placing your order.
                </p>
              </div>

              <div className="FileUploadContainer">
                <label className="FileUploadLabel" htmlFor="fileInput">
                  Choose File
                </label>
                <input type="file" id="fileInput" onChange={handleFileChange} />
                <span className="FileName">{fileName}</span>
              </div>

              <div className="ConfirmCheckbox">
                <input
                  type="checkbox"
                  id="confirmTransfer"
                  disabled={!fileName}
                />
                <label htmlFor="confirmTransfer">
                  I have made the transfer and uploaded proof.
                </label>
              </div>
            </>
          )}
        </div>

        <button
          type="submit"
          className="PlaceOrderBtn"
          disabled={paymentMethod === "bank" && !proofOfPayment}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
