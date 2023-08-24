export default function CustomerDetail({ customer }) {
  return (
    <div>
      <h1>
        {customer.name}
      </h1>
      <p>
        Email: {customer.email}
      </p>
      <p>
        Phone: {customer.phone}
      </p>
      {/* Display more details or order history if needed */}
    </div>
  );
}
