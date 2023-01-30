import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./routes/user";
import UsersList from "./routes/usersList";
import ErrorPage from "./error-page";
import "./index.module.scss";

// eslint-disable-next-line
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    
    {
        path: "/users",
        element: (
          <UsersList />
        ),
      },
      {
        path: "/users/:user",
        element: <User />,
      },
    ,
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={router} />);