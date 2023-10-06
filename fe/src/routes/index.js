import {  createBrowserRouter } from "react-router-dom";
import Login from "../components/Login.component";
import Home from "../components/Home.component";
import Header from "../components/Header/Header.component";
import Profile from "../components/Profile/Profile.component";
import ChangePass from "../components/Profile/ChangePass.component";
import Landingpage from "../page/Landingpage.js";




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
                path: '/',
                element: <Home />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/changepassword',
                element: <ChangePass />
            },
            {
                path: '/home',
                element: <Landingpage />
            }

        ]
    }


])