import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './assets/Home/HomePage.jsx'
import StorePage from './assets/Store/StorePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "store",
    element: <StorePage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);