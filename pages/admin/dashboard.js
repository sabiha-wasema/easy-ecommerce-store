import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link href="/admin/customers">
        <a>Customers</a>
      </Link>
      <Link href="/admin/orders">
        <a>Orders</a>
      </Link>
      <Link href="/admin/products">
        <a>Products</a>
      </Link>
    </div>
  );
}
