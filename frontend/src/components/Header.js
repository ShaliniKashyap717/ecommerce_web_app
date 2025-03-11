// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { itemContext } from '../context/ItemContext';
import "./Header.css";

const Header = () => {
  const { itemsInCart } = useContext(itemContext);

  return (
    <div className="header">
      <Link to="/">
        <h1 className="mybook">My Book Store</h1>
      </Link>
      <p className="tagline">Your one-stop shop for all your favorite books!</p>
      <div className="cart-num">
        <div className="cart-items">{itemsInCart}</div>
        <Link to="/cart" aria-label="Go to cart">
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
