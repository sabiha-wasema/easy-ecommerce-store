import { useRouter } from "next/router";
import OrderDetail from "../../../components/OrderDetail";
import { orders } from "../../../utils/data";

export default function OrderDetailPage() {
  const router = useRouter();
  const { orderId } = router.query;
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div>
      <OrderDetail order={order} />
    </div>
  );
}
