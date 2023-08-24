import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-5">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Add Product in Cart
      </h2>
      <ul className="bg-white p-5 rounded-lg">
        {cart.map((item, index) =>
          <li
            key={item.id}
            className="border-b py-2 flex items-center justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-600">
                ${item.price} (Qty: {item.quantity})
              </p>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </li>
        )}
      </ul>
      {cart.length === 0 &&
        <p className="mt-4 text-red-600 text-center">Your cart is empty.</p>}
    </div>
  );
};

export default Cart;
