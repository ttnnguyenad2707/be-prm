import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../components/Login.component";

export const appRoutes = createBrowserRouter([
    {
        path: '',
        element: <Navigate to='/home' />
    },
    {
        path: '/login',
        element: <Login/>
    },
    
    
])