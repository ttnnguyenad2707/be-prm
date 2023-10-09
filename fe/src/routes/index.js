import { createBrowserRouter } from "react-router-dom";
import Login from "../components/LoginSigup/Login.component";
import Home from "../components/Home.component";
import Header from "../components/Header/Header.component";
import Register from "../components/LoginSigup/Register.component";


import Profile from "../components/Profile/Profile.component";
import ChangePass from "../components/Profile/ChangePass.component";
import Landingpage from "../page/Landingpage.js";
import Adminpage from "../page/Adminpage.js";
import SignUp from "../components/LoginSigup/SignUp";


export const appRoutes = createBrowserRouter([
    {
        path: '',
        element: <Header />,
        children: [

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
            },
            {
                path: '/admin/post',
                element: <Adminpage action={'post'} />
            },
            {
                path: '/admin/account',
                element: <Adminpage action={'account'} />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <SignUp />
    },


])