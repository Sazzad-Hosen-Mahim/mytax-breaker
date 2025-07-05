import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import BookAnAppointment from "../Pages/BookAnAppointment";
import NotFound from "../Pages/NotFound";
import Team from "../Pages/Team";
import DashBoardLayout from "../dashboard/layout/DashBoardLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardHome from "../Pages/Admin/DashboardHome";
import DashboardSettings from "../Pages/Admin/DashboardSettings";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";
import Service from "../Pages/Service";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap all routes in Layout
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "book-appointment",
        element: <BookAnAppointment />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "service",
        element: <Service />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/admin",
    element: <PrivateRoute />,
    children: [
      {
        path: "dashboard",
        element: <DashBoardLayout />,
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: "settings",
            element: <DashboardSettings />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
