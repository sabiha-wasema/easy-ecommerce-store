import React from "react";
// import ProductList from "../Product/ProductList"; // Import your ProductList component
import Link from "next/link";

const AdminDashboard = ({ products }) => {
  return (
    <div>
      <h1 className="p-5 text-center text-3xl font-semibold hover:text-blue-300 transition duration-300 font-cursive">
        Admin Dashboard
      </h1>
      {/* <ProductList products={products} /> */}
      <div className="p-5 flex justify-center items-center">
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
      </div>
    </div>
  );
};

export default AdminDashboard;
