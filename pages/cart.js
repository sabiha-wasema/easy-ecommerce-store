import CartItem from "../components/CartItem";
import { cartItems } from "../utils/data";

export default function CartPage() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
        Proceed to Checkout
      </button>
    </div>
  );
}
