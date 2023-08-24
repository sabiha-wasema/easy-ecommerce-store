import { useRouter } from "next/router";
import ProductDetail from "../../../components/ProductDetail";
import { products } from "../../../utils/data";

export default function AdminProductDetailPage() {
  const router = useRouter();
  const { productId } = router.query;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}
