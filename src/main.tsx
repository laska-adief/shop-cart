import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Products from "./pages/Products.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/",
        element: <Navigate to="/products" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
