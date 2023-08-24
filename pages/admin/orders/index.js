import OrderCard from "../../../components/OrderCard";
import { orders } from "../../../utils/data";

export default function AdminOrdersPage() {
  return (
    <div>
      <h1>Admin Order List</h1>
      <div className="grid grid-cols-3 gap-4">
        {orders.map(order => <OrderCard key={order.id} order={order} />)}
      </div>
    </div>
  );
}
