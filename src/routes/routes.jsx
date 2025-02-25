import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import BookAnAppointment from "../Pages/BookAnAppointment";
import NotFound from "../Pages/NotFound";
import Team from "../Pages/Team";
import DashBoardLayout from "../dashboard/layout/DashBoardLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap all routes in Layout
    children: [
      {
        index: true, // Default child route (Home)
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path:"/admin/dashboard",
    element:<DashBoardLayout/>
  }
]);

export default routes;
