import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductList from "../Product/ProductList"; // Import the ProductList component
import mockProducts from "../data/mockProducts.js"; //  Import the product data

const Home = () => {
  return (
    <div className=" bg-gray-100">
      <Navbar /> {/* Include the Navbar */}
      <main className="p-4">
        <ProductList products={mockProducts} />{" "}
        {/* Display the ProductList component */}
      </main>
      <Footer /> {/* Include the footer */}
    </div>
  );
};

export default Home;
