import { Outlet, useRoutes } from "react-router";
import AuthRoutes from "./AuthRoute";
import PrivateRoutes from "./privateRoute";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import ProductDetail from "../page/ProductDetail";

export default function MainRoutes() {
  const Routes = useRoutes([
    {
      element: <MainLayout />,
      path: "/",
      children: [
        {
          path: "/",
          element:<Home/>,
        },
        {
          path: "/productdetail/:id",
          element: <ProductDetail/>,
        },
        {
          element: <PrivateRoutes />,
          children: [
            {
              path: "/profile",
              element: <p>Profile</p>,
              children: [
                {
                  path: "accound",
                  element: <h1>accound</h1>,
                },
              ],
            },
          ],
        },
        {
          element: <AuthRoutes />,
          children: [
            {
              path: "/login",
              element: <h1>Login</h1>,
            },
          ],
        },
      ],
    },
  ]);

  return Routes;
}
