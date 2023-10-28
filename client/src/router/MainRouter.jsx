import { Outlet, useRoutes } from "react-router";
import AuthRoutes from "./AuthRoute";
import PrivateRoutes from "./privateRoute";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import ProductDetail from "../page/ProductDetail";
import ProductAbout from "../components/ProductDetail.jsx/ProductAbout";
import CompDetailTab from "../components/ProductDetail.jsx/CompDetailTab";
import CompSpecs from "../components/ProductDetail.jsx/CompSpecs";
import ContactUs from "../page/ContactUs";
import Login from "../page/Login";

export default function MainRoutes() {
  const Routes = useRoutes([
    {
      element: <MainLayout />,
      path: "/home",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "productdetail/:id/:category/:compCategory/",
          element: <ProductDetail />,
          children: [
            {
              path: "aboutproduct",
              element: <ProductAbout />,
            },
            {
              path: "detail",
              element: <CompDetailTab />,
            },
            {
              path: "specs",
              element: <CompSpecs />,
            },
          ],
        },
        {
          path:'contact us',
          element:<ContactUs/>
        },

        {
          element: <PrivateRoutes />,
          children: [
            {
              path: "profile",
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
              path: "login",
              element: <Login/>,
            },
          ],
        },
      ],
    },
  ]);

  return Routes;
}
