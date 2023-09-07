import { createBrowserRouter } from "react-router-dom";
import AppName from "./pages/day1/app";
import Layout from "./component/Layout/layout";
import Home from "./pages/day2/home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "app-name", element: <AppName /> },
            { path: "home", element: <Home /> },
        ]
    }
])