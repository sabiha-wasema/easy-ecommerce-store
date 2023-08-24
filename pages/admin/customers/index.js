import CustomerCard from "../../../components/CustomerCard";
import { customers } from "../../../utils/data";

export default function AdminCustomersPage() {
  return (
    <div>
      <h1>Admin Customers List</h1>
      <div className="grid grid-cols-3 gap-4">
        {customers.map(customer =>
          <CustomerCard key={customer.id} customer={customer} />
        )}
      </div>
    </div>
  );
}
