import { createBrowserRouter } from "react-router";
import LandingPage from "./components/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
]);