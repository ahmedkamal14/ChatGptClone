import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Welcome } from "@/Pages/Welcome";
import { Main } from "@/Pages/Main-Screen";
import { Login } from "@/Pages/Login";

const router = createBrowserRouter([
  {
    path: "/ChatGptClone/",
    element: <Welcome />,
  },
  {
    path: "/ChatGptClone/login",
    element: <Login />,
  },
  {
    path: "/ChatGptClone/main",
    element: <Main />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
