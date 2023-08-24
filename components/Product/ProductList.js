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
      {/* <div className="p-5 flex justify-center items-center">
        <Link
          className="py-2 px-3 bg-red-500 rounded-lg hover:bg-red-700 text-white"
          href="/products/new"
        >
          Add New Product
        </Link>
      </div>
      <div className="p-5 flex justify-center items-center">
        <table className="basic mt-2">
          <thead>
            <tr>
              <td>Product Name</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {products.map(product =>
              <tr>
                <td>
                  {product.title}
                </td>
                <td>
                  <Link href={"/products/edit/" + product.id}>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </span>
                    Edit
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default ProductList;
