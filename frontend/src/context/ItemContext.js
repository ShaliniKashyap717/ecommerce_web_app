import { createContext, useEffect, useState } from "react";

const itemContext = createContext();

function CustomItemContext({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/books");
      const products = await response.json();
      console.log(products);
      setProducts(products);
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id);
    if (existingItem) {
      updateQuantity(existingItem, existingItem.quantity + 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setItemsInCart(itemsInCart + 1);
      setTotalPrice(totalPrice + product.price);
    }
  };

  const removeFromCart = (product) => {
    const index = cart.findIndex((item) => item._id === product._id);
    if (index !== -1) {
      if (cart[index].quantity > 1) {
        updateQuantity(product, cart[index].quantity - 1);
      } else {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setTotalPrice(totalPrice - cart[index].price * cart[index].quantity);
        setCart(updatedCart);
        setItemsInCart(itemsInCart - cart[index].quantity);
      }
    } else {
      console.log("Item not found in the cart");
    }
  };

  const updateQuantity = (product, quantity) => {
    if (quantity <= 0) {
      removeFromCart(product);
      return;
    }
    const updatedCart = cart.map((item) => {
      if (item._id === product._id) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
    setItemsInCart(itemsInCart - product.quantity + quantity);
    setTotalPrice(totalPrice - product.price * product.quantity + product.price * quantity);
  };

  return (
    <itemContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        itemsInCart,
        totalPrice,
      }}
    >
      {children}
    </itemContext.Provider>
  );
}

export { itemContext };
export default CustomItemContext;
