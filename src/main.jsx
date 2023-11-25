import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { ThemeProvider } from "@material-tailwind/react";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./Providers/AuthProviders";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[1200px] mx-auto">
      <HelmetProvider>
        <AuthProviders>
          <ThemeProvider>
            <RouterProvider router={router}></RouterProvider>
          </ThemeProvider>
        </AuthProviders>
      </HelmetProvider>
    </div>
  </React.StrictMode>
);
