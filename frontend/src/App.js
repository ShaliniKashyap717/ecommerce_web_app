import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Add this
import ProductItem from './components/ProductItem';
import Header from './components/Header';
import CartPage from './components/CartPage'; // Create this component
import './App.css';
import CustomItemContext from './context/ItemContext';

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => setError(error));
  }, []);

  if (error) return <p>Error loading products: {error.message}</p>;
  if (!products.length) return <p>No products available</p>;

  return (
    <BrowserRouter> {/* Wrap everything with BrowserRouter */}
      <CustomItemContext>
        <Header /> {/* Keep header outside Routes for persistent navigation */}
        
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="product-list">
                {products.map(product => (
                  <ProductItem key={product._id} product={product} />
                ))}
              </div>
            } 
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CustomItemContext>
    </BrowserRouter>
  );
};

export default App;
