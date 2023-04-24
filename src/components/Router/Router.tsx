import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../../pages/Home/Home";
import NewReleases from "../../pages/NewReleases/NewReleases";

import Layout from "../Layout/Layout";
import NotFound from "../../pages/NotFound/NotFound";

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
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
