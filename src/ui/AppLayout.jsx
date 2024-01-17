import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";

export default function AppLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
