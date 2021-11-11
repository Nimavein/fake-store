import { IRoute } from "./types";
import Homepage from "./components/homepage/Homepage";
import StoreSubpage from "./components/storeSubpage/StoreSubpage";
import ItemDetailsPage from "./components/ItemDetailsPage/ItemDetailsPage";
import Cart from "./components/cart/Cart";

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
    component: ItemDetailsPage,
    exact: true,
  },
];

export default routes;
