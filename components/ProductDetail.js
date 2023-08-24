export default function ProductDetail({ product }) {
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
        ${product.price}
      </p>
      <p>
        {product.description}
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}
