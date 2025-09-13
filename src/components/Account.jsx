// src/components/Account.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Account.css"; // Assuming you'll add CSS here

export default function Account() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="AccountContainer">
      <h2>My Account</h2>

      {userData ? (
        <div className="AccountDetails">
          <div className="AccountInfo">
            <h3>Account Details</h3>
            <div className="AccountItem">
              <strong>Full Name:</strong>
              <span>{userData.fullName}</span>
            </div>
            <div className="AccountItem">
              <strong>Email:</strong>
              <span>{userData.email}</span>
            </div>
            <div className="AccountItem">
              <strong>Phone:</strong>
              <span>{userData.phone}</span>
            </div>
            <div className="AccountItem">
              <strong>Address:</strong>
              <span>{userData.address}</span>
            </div>
            <div className="AccountItem">
              <strong>City:</strong>
              <span>{userData.city}</span>
            </div>
            <div className="AccountItem">
              <strong>State:</strong>
              <span>{userData.state}</span>
            </div>
            <div className="AccountItem">
              <strong>Zip Code:</strong>
              <span>{userData.zip}</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="NavigationButtons">
            <Link to="/my-orders" className="NavButton">
              My Orders
            </Link>
            <Link to="/contact" className="NavButton">
              Contact Us
            </Link>
            <Link to="/about" className="NavButton">
              About Us
            </Link>
          </div>
        </div>
      ) : (
        <p>Please log in to view your account details.</p>
      )}
    </div>
  );
}
