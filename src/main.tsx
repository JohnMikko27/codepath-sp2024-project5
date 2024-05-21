import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.js";
import Main from "./routes/Main.js";
import ErrorPage from "./routes/ErrorPage.js";
import Details from "./routes/Details.js";
import About from "./routes/About.js";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main/>,
      },
      {
        path: "/teams/:teamId",
        element: <Details />,
        loader : async ({params}) => {
          return fetch(`https://v2.nba.api-sports.io/standings?team=${params.teamId}&season=2023&league=standard`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "v2.nba.api-sports.io",
              "x-rapidapi-key": "891bbdd40e39ebf979dd5dff37b6bb3b"
            }
          });
        }
      }, 
      {
        path: "/about", 
        element: <About/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
