// components/CartPage.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { itemContext } from '../context/ItemContext';
import "./CartPage.css"; // Import CSS file

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(itemContext);

  const handleCheckout = () => {
    alert('Proceeding to checkout!'); // Replace with actual checkout logic
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>
      {cart?.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-cart-text">Your cart is empty</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cart?.map((item) => (
              <div key={item._id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-author">Author: {item.author}</p>
                  <p className="item-price">Price: ₹{item.price}</p>
                  <div className="quantity-control">
                    <button
                      onClick={() => updateQuantity(item, item.quantity - 1)}
                      className="decrease-quantity"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item, item.quantity + 1)}
                      className="increase-quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3 className="total-price">Total: ₹{totalPrice}</h3>
            <button onClick={handleCheckout} className="checkout-btn">
              Proceed to Checkout
            </button>
            <Link to="/" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
