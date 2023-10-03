import {  createBrowserRouter } from "react-router-dom";
import Login from "../components/Login.component";
import Home from "../components/Home.component";
import Header from "../components/Header/Header.component";




export const appRoutes = createBrowserRouter([
    {
        path: '',
        element: <Header />,
        children: [

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/home',
                element: <Home />
            }
        ]
    }


])