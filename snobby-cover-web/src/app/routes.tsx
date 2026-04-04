import { createBrowserRouter } from "react-router";
import HomePage from "./components/HomePage";
import ResponsiveItemDetail from "./components/ResponsiveItemDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/type/:id",
    Component: ResponsiveItemDetail,
  },
]);