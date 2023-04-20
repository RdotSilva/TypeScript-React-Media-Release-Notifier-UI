import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Home/Home";
import NewReleases from "../../pages/NewReleases/NewReleases";

import Layout from "../Layout/Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="newreleases" element={<NewReleases />} />
    </Route>
  )
);
