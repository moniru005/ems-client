import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { ThemeProvider } from "@material-tailwind/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[1200px] mx-auto">
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </div>
  </React.StrictMode>
);
