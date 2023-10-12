import { createBrowserRouter } from "react-router-dom";
import Login from "../components/LoginSigup/Login.component";
import Header from "../components/Header/Header.component";
import Profile from "../components/Profile/Profile.component";
import ChangePass from "../components/Profile/ChangePass.component";
import Landingpage from "../page/Landingpage.js";
import Posted from "../components/UserStored/Posted.component";
import PostEdit from "../components/PostedAction/PostEdit.component";



import Adminpage from "../page/Adminpage.js";
import SignUp from "../components/LoginSigup/SignUp";

export const appRoutes = createBrowserRouter([
    {
        path: '',
        element: <Header />,
        children: [

            {
                path: '/',
                element: <Landingpage />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/changepassword',
                element: <ChangePass />
            },
            // {
            //     path: '/home',
            //     element: <Landingpage />
            // },
            {
                path: '/home',
                element: <Landingpage />
            },
            {
                path: '/stored/posted',
                element: <Posted />
            },
            {
                path: '/stored/posted/:id',
                element: <PostEdit />
            }

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