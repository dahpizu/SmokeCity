import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // this file can be empty, but should exist
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
