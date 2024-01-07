import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { ThemeProvider } from "@material-tailwind/react";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./Providers/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-workSans mx-auto bg-gradient-to-tr from-[#f7f8f8] to-[#ffffff]">
      <HelmetProvider>
        <AuthProviders>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
              <RouterProvider router={router}></RouterProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </AuthProviders>
      </HelmetProvider>
    </div>
  </React.StrictMode>
);
