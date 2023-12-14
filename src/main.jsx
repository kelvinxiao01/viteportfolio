import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Error.jsx";
import CMBExperience from "./components/experiences/CMBExperience.jsx";
import WyzantExperience from "./components/experiences/WyzantExperience.jsx";
import About from "./components/About.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { path: "/cmb", element: <CMBExperience /> },
  { path: "/wyzant", element: <WyzantExperience /> },
  // { path: "/viteportfolio/about", element: <About /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
