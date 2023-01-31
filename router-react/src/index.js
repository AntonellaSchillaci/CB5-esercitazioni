import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

import MainLayout from "./layouts/mainLayout/index";
import User from "./routes/user";
import UsersList from "./routes/usersList";
import Post from "./routes/post";
import PostsList from "./routes/postsList";
import ErrorPage from "./error-page";
import "./index.module.scss";

// eslint-disable-next-line
// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App />,
//       errorElement: <ErrorPage />,
//     },
    
//     {
//         path: "/users",
//         element: (
//           <UsersList />
//         ),
//       },
//       {
//         path: "/users/:user",
//         element: <User />,
//       },

//       {
//         path: "/posts",
//         element: (
//           <PostsList />
//         ),
//       },
//       {
//         path: "/posts/:post",
//         element: <Post />,
//       },

      
//     ,
//   ]);
  
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(<RouterProvider router={router} />);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route>
        <Route path="/" element={<App />} errorElement={<ErrorPage />} />
          <Route path="users" element={<UsersList />} />
          <Route path="/users/:user" element={<User />} />
          <Route path="posts" element={<PostsList />} />
          <Route path="posts/:post" element={<Post />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
