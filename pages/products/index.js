import ProductCard from "../../components/ProductCard";
import { products } from "../../utils/data";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map(product =>
          <ProductCard key={product.id} product={product} />
        )}
      </div>
    </div>
  );
}
