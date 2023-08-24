// pages/products.js
import React from "react";
import ProductList from "../../components/Product/ProductList";
import mockProducts from "../../components/data/mockProducts"; // Update the import path

const ProductsPage = () => {
  return (
    <div>
      <main>
        <ProductList products={mockProducts} />
      </main>
    </div>
  );
};

export default ProductsPage;
