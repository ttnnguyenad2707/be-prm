import {  createBrowserRouter } from "react-router-dom";
import Login from "../components/Login.component";
import Home from "../components/Home.component";
import Header from "../components/Header/Header.component";
import Landingpage from "../page/Landingpage.js";
import Adminpage from "../page/Adminpage.js";

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
                element: <Landingpage />
            },
            {
                path: '/admin/post',
                element: <Adminpage action = {'post'}/>
            },
            {
                path: '/admin/account',
                element: <Adminpage action = {'account'}/>
            },
            
        ]
    }


])