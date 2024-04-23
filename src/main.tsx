import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from "react-router-dom";
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode></React.StrictMode>);
