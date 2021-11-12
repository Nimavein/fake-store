import { IRoute } from "./types";
import Homepage from "./components/homepage/Homepage";
import StoreSubpage from "./components/storeSubpage/StoreSubpage";
import Cart from "./components/cart/Cart";
import ItemPage from "./components/itemPage/ItemPage";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
    exact: true,
  },
  {
    path: "/store",
    name: "Store",
    component: StoreSubpage,
    exact: true,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    exact: true,
  },
  {
    path: "/store/:itemId",
    name: "Item Details",
    component: ItemPage,
    exact: true,
  },
];

export default routes;
