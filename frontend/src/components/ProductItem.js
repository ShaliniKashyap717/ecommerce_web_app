// components/ProductItem.js
import React, { useContext } from "react";
import { itemContext } from "../context/ItemContext";
import "./ProductItem.css"; // Import CSS file

const ProductItem = ({ product }) => {
  const context = useContext(itemContext);

  if (!context) {
    console.error("itemContext is undefined. Make sure the provider is wrapping this component.");
    return null;
  }

  const { addToCart, removeFromCart } = context;

  if (!product) {
    return <p>Product not available</p>;
  }

  const handleAddToCart = () => {
    console.log("Product added:", product);
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    console.log("Product removed:", product);
    removeFromCart(product);
  };

  return (
    <div className="product-card">
      <img
        className="product-image"
        src={product.image || "placeholder.jpg"}
        alt={product.name || "Unnamed Product"}
      />

      <div className="product-details">
        <h3>{product.title || "No Name"}</h3>
        <p>{product.description || "No description available"}</p>
        <p>Price: {product.price ? `${product.price} Rs` : "N/A"}</p>
        <p>{product.genre || "Unknown Genre"}</p>
        <p style={{ fontWeight: "700", color: "brown" }}>
          {product.author || "Unknown Author"}
        </p>

        <div className="button-container">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="remove-btn" onClick={handleRemoveFromCart}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
