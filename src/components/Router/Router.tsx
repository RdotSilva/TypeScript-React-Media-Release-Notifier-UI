import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import NewReleases from "../../pages/NewReleases/NewReleases";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/newreleases",
    element: <NewReleases />,
  },
]);
