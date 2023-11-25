import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Navbar from "../Components/Navbar/Navbar";
import PrivateRoute from "./PrivateRoute";
import EmployeeHome from "../Pages/Dashboard/EmployeeHome/EmployeeHome";
import HrHome from "../Pages/Dashboard/HrHome/HrHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    //TODO: private route
    path: "/dashboard",
    element: (
      <>
        <PrivateRoute>
          <Navbar></Navbar>
          <Dashboard></Dashboard>
        </PrivateRoute>
      </>
    ),
    children: [
        //employee / normal user routes
        {
            path: 'employeeHome',
            element: <EmployeeHome></EmployeeHome>
        },

        //HR Routes
        {
            path: 'hrHome',
            element: <HrHome></HrHome>
        },

        //Admin Routes
        {
            path: 'adminHome',
            element: <AdminHome></AdminHome>
        },
        {
            path: 'allUsers',
            element: <AllUsers></AllUsers>
        },
    ]
  },
]);
