import { useRouter } from "next/router";
import CustomerDetail from "../../../components/CustomerDetail";
import { customers } from "../../../utils/data";

export default function CustomerDetailPage() {
  const router = useRouter();
  const { customerId } = router.query;
  const customer = customers.find(c => c.id === customerId);

  if (!customer) {
    return <div>Customer not found</div>;
  }

  return (
    <div>
      <CustomerDetail customer={customer} />
    </div>
  );
}
