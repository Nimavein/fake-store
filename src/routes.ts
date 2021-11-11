import { IRoute } from "./types";
import Homepage from "./components/homepage/Homepage";
import StoreSubpage from "./components/storeSubpage/StoreSubpage";
import ItemDetailsPage from "./components/ItemDetailsPage/ItemDetailsPage";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Homepage",
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
    path: "/store/:itemId",
    name: "Item Details",
    component: ItemDetailsPage,
    exact: true,
  },
];

export default routes;
