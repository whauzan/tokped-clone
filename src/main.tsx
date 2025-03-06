import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductPage from "./pages/product";
import SearchPage from "./pages/search";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
