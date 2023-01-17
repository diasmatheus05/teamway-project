import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { PersonalityTest } from "../pages/PersonalityTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <PersonalityTest />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
