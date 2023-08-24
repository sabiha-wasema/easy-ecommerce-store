import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4">
      <Link href={`/products/${product.id}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="w-32 h-32 object-cover"
          />
          <h2 className="mt-2 text-lg font-semibold">
            {product.name}
          </h2>
          <p className="mt-1">
            ${product.price.toFixed(2)}
          </p>
        </a>
      </Link>
    </div>
  );
}
