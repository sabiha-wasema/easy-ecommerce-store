// pages/products/[id].js
import React from "react";
import { useRouter } from "next/router";
import ProductDetail from "../../components/Product/ProductDetail";
import mockProducts from "../../components/data/mockProducts"; // Update the import path

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const selectedProduct = mockProducts.find(
    product => product.id === Number(id)
  );

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex-1 bg-white overflow-hidden">
        <main className="p-4">
          <ProductDetail product={selectedProduct} />
        </main>
      </div>
    </div>
  );
};

export default ProductDetailPage;
