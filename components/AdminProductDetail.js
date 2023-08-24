export default function AdminProductDetail({ product }) {
  return (
    <div>
      <h1>
        {product.name}
      </h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover"
      />
      <p>
        Price: ${product.price}
      </p>
      {/* Display more product details */}
    </div>
  );
}
