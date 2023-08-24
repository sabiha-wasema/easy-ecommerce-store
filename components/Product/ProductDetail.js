import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart"; // Update the path to Cart.js

const ProductDetail = ({ product }) => {
  const [cart, setCart] = useState([]); // Cart state to hold selected products

  // const addToCart = () => {
  //   setCart([...cart, product]);
  // };

  const addToCart = () => {
    const newItem = { ...product, quantity: 1, id: Date.now() };
    setCart([...cart, newItem]);
  };

  const removeFromCart = index => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-5 px-5">
        <div className="p-5 bg-gray-100 mt-5 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            <span className="text-blue-500 font-semibold font-serif">
              {" "}{product.title}
            </span>{" "}
            Product Detail
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 text-center container mx-auto">
            <div className="flex items-center justify-center mb-6 ">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-48"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {product.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {product.description}
            </p>
            <p className="text-gray-800 font-semibold">
              Price: ${product.price}
            </p>
            <button
              onClick={addToCart}
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
