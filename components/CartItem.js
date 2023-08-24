export default function CartItem({ item }) {
  return (
    <div className="border p-4">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-32 h-32 object-cover"
      />
      <h2 className="mt-2">
        {item.product.name}
      </h2>
      <p>
        Quantity: {item.quantity}
      </p>
      <p>
        Total: ${item.product.price * item.quantity}
      </p>
      <button className="bg-red-500 text-white px-3 py-1 rounded">
        Delete
      </button>
    </div>
  );
}
