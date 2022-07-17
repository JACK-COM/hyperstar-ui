import { lazy } from "react";
import { Route } from "react-router";

/**
 * Application Routes here.
 * Note: this auto-populates your application nav bar.
 */
const publicRoutes: RouteDef[] = [
  {
    path: "/",
    text: "Home",
    component: lazy(() => import("./Home")),
    publicRoute: true
  },
  {
    path: "/dao",
    text: "DAOSpace",
    component: lazy(() => import("./DaoSpace")),
    publicRoute: true,
    menuItem: true,
  },
  {
    path: "/dao/new",
    text: "Create DAO",
    component: lazy(() => import("./DaoCreate")),
    publicRoute: true
  },
  {
    path: "/dao/interact",
    text: "List all DAOs",
    component: lazy(() => import("./DaoInteract")),
    publicRoute: true
  },
  {
    path: "/dao/interact/:id",
    text: "Interact with a DAO",
    component: lazy(() => import("./DaoInteract")),
    publicRoute: true
  }
];

/**
 * Application Routes here.
 * Note: this auto-populates your application nav bar.
 */
const routes: RouteDef[] = [
  ...publicRoutes,
  {
    path: "/dao/edit/:id",
    text: "Edit DAO (Admin)",
    component: lazy(() => import("./DaoEdit")),
    publicRoute: true
  },
  {
    path: "/buy",
    text: "Market",
    component: lazy(() => import("./Marketplace")),
    menuItem: true
  },
  {
    path: "/buy/:assetId",
    text: "Buy Item",
    component: lazy(() => import("./BuyNFT"))
  },
  {
    path: "/sell",
    text: "Sell",
    component: lazy(() => import("./SellNFT")),
  },
  {
    path: "/swap/:poolId",
    text: "Flat Swap (Pool)",
    component: lazy(() => import("./TokenExchangeSwap"))
  },
  {
    path: "/swap",
    text: "CREAMSwap",
    component: lazy(() => import("./CreamSwap")),
    menuItem: true
  }
];

export default routes;

export interface RouteDef extends Partial<Route> {
  path: string;
  text: string;
  component?: any;
  render?: (p?: any) => JSX.Element;
  menuItem?: boolean;
  publicRoute?: boolean;
}
