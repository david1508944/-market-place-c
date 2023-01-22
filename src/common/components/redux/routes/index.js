import App from "../../../../App"
import { lazy } from "react";
import {Navigate} from "react-router-dom"
import Login from "../../Login";
import Registration from "../../Registration";

const Authentication = lazy(() => import('../../pages/Authentication'))
const Cart = lazy(() => import("../../pages/Cart"))
const Home = lazy(() => import("../../pages/Home"))
const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'cart',
                element: <Cart />,
            },
            {
                path: 'auth',
                element: <Authentication />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'registration',
                element: <Registration />
            },
           
            {
                path: '*',
                element: <Navigate to='/' />,
            }
        ]
    },

]



export default routes