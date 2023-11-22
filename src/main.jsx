import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Error.jsx";
import CMBExperience from "./components/experiences/CMBExperience.jsx";
import WyzantExperience from "./components/experiences/WyzantExperience.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/cmb", element: <CMBExperience /> },
  { path: "/wyzant", element: <WyzantExperience /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
