import {  createBrowserRouter } from "react-router-dom";
import Login from "../components/LoginSigup/Login.component";
import Home from "../components/Home.component";
import Header from "../components/Header/Header.component";
import Register from "../components/LoginSigup/Register.component";




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
                path: '/register',
                element: <Register />
            },
            {
                path: '/home',
                element: <Home />
            }
        ]
    }


])