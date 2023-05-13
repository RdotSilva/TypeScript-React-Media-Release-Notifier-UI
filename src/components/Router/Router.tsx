import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import NewReleases from "../../pages/NewReleases/NewReleases";

import Layout from "../Layout/Layout";
import NotFound from "../../pages/NotFound/NotFound";
import UserOptions from "../../pages/UserOptions/UserOptions";
import Login from "../../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "newreleases",
        element: <NewReleases />,
      },
      {
        path: "options",
        element: <UserOptions />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
