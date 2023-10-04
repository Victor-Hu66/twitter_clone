import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Notifications from "../pages/notifications";
import Explore from "~/pages/explore";
import NotFound from "~/pages/not-found";
import MainLayout from "~/layouts/main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
