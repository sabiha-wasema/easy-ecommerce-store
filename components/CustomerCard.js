import Link from "next/link";

export default function CustomerCard({ customer }) {
  return (
    <div className="border p-4">
      <Link href={`/admin/customers/${customer.id}`}>
        <a>
          <h2>
            {customer.name}
          </h2>
          <p>
            {customer.email}
          </p>
        </a>
      </Link>
    </div>
  );
}
