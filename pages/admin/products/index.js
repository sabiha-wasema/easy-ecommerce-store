import ProductCard from "../../../components/ProductCard";
import { products } from "../../../utils/data";

export default function AdminProductsPage() {
  return (
    <div>
      <h1>Admin Product List</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product =>
          <ProductCard key={product.id} product={product} />
        )}
      </div>
    </div>
  );
}
