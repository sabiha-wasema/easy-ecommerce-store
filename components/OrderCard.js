import Link from "next/link";

export default function OrderCard({ order }) {
  return (
    <div className="border p-4">
      <Link href={`/admin/orders/${order.id}`}>
        <a>
          <h2>
            Order ID: {order.id}
          </h2>
          <p>
            Total: ${order.total}
          </p>
        </a>
      </Link>
    </div>
  );
}
