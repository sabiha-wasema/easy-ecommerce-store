export default function OrderDetail({ order }) {
  return (
    <div>
      <h1>
        Order ID: {order.id}
      </h1>
      <p>
        Total: ${order.total}
      </p>
      {/* Display more order details, items, and status */}
    </div>
  );
}
