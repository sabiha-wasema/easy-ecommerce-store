import React from "react";
import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <div id="products">
      <div className=" rounded-lg py-5  px-3 container mx-auto">
        <h2 className="text-2xl pb-3 font-cursive font-extrabold mb-4 text-left mt-5 ml-5">
          Explore Our Product Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 px-5">
          {products.map(product =>
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md animate-fade-scale"
            >
              <div className="h-48 flex items-center justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-2">
                {product.description}
              </p>
              <p className="mt-2 text-gray-800 font-bold">
                ${product.price}
              </p>
              <div className="mt-4 text-center">
                <Link href={`/products/${product.id}`}>
                  <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
