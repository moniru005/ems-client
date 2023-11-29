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
import EmployeeList from "../Pages/Dashboard/EmployeeList/EmployeeList";
import UserDetails from "../Pages/Dashboard/AllUsers/UserDetails";
import AddEmployee from "../Pages/Dashboard/AddEmployee/AddEmployee";
import EmployeeTask from "../Pages/Dashboard/EmployeeTask/EmployeeTask";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory/PaymentHistory";
import EmployeeWorkSheet from "../Pages/Dashboard/EmployeeTask/EmployeeWorkSheet";
import PaymentPage from "../Pages/Dashboard/Payment/PaymentPage/PaymentPage";
import TaskList from "../Pages/Dashboard/EmployeeTask/TaskList";
import WorkSheetListPage from "../Pages/Dashboard/EmployeeTask/WorkSheetListPage";
import UpdateEmployee from "../Pages/Dashboard/AddEmployee/UpdateEmployee";
import AdminRoute from "./AdminRoute";

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
            element: <PrivateRoute><EmployeeHome></EmployeeHome></PrivateRoute>
        },
        {
            path: 'paymentPage/:id',
            element: <PaymentPage></PaymentPage>
        },

        //HR Routes
        {
            path: 'hrHome',
            element: <PrivateRoute><HrHome></HrHome></PrivateRoute>
        },
        {
            path: 'employeeList',
            element: <PrivateRoute><EmployeeList></EmployeeList></PrivateRoute>
        },
        {
            path: 'userDetails/:id',
            element: <UserDetails></UserDetails>
        },
        {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
        },
        {
            path: 'workSheetList',
            element: <WorkSheetListPage></WorkSheetListPage>
        },
        {
          path: 'addEmployee',
          element: <PrivateRoute><AddEmployee></AddEmployee></PrivateRoute>
        },
        {
          path: 'updateEmployee/:id',
          element: <PrivateRoute><UpdateEmployee></UpdateEmployee></PrivateRoute>
        },

        //Admin Routes
        {
            path: 'adminHome',
            element: <PrivateRoute><AdminHome></AdminHome></PrivateRoute>
        },
        {
            path: 'allUsers',
            element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
        },

        //Common Routes
       
        // {
        //   path: 'employeeTask',
        //   element: <EmployeeTask></EmployeeTask>
        // },
        {
          path: 'employeeWorkSheet',
          element: <EmployeeWorkSheet></EmployeeWorkSheet>
        },
       
    ]
  },
]);
