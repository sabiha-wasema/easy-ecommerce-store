import CartItem from "../components/CartItem";
import { cartItems } from "../utils/data";

export default function CheckoutPage() {
  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Checkout</h1>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      <p>
        Total: ${total}
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Place Order
      </button>
    </div>
  );
}
