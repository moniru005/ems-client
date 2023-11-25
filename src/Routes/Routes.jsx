import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Navbar from "../Components/Navbar/Navbar";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
      ]
    },
    {
        path: '/login',
        element:<Login></Login>
    },
    {
        path: '/register',
        element:<Register></Register>
    },
    {
        //TODO: private route
        path: '/dashboard',
        element:<>
        <Navbar></Navbar>
        <Dashboard></Dashboard>
        </>
    }
  ]);