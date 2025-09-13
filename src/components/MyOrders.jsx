// src/components/MyOrders.jsx
import React, { useState, useEffect } from "react";
import "../css/MyOrders.css";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="MyOrdersContainer">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders yet. Start shopping!</p>
      ) : (
        <div className="OrdersList">
          {orders.map((order) => (
            <div key={order.id} className="OrderItem">
              <h3>Order ID: {order.id}</h3>
              <p>Status: {order.status}</p>
              <p>Total: ₦{order.total.toLocaleString()}</p>
              <p>Payment Method: {order.paymentMethod}</p>
              <p>
                Created At:{" "}
                {new Date(order.createdAt).toLocaleString(undefined, {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>

              {order.proofOfPayment && (
                <div>
                  <h4>Proof of Payment:</h4>
                  <img
                    src={order.proofOfPayment}
                    alt="Proof of Payment"
                    className="ProofImage"
                  />
                </div>
              )}

              <h4>Delivery Details:</h4>
              {order.deliveryDetails ? (
                <>
                  <p>Name: {order.deliveryDetails.fullName}</p>
                  <p>Address: {order.deliveryDetails.address}</p>
                  <p>Phone: {order.deliveryDetails.phone}</p>
                </>
              ) : (
                <p>No delivery details available.</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
