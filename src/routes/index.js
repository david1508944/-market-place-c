import { lazy } from "react";
import { Navigate } from "react-router";
import App from "../App";


const Cart = lazy(() => import("../pages/Cart"))
const Home = lazy(() => import("../pages/Home"))


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
                path: '*',
                element: <Navigate to='/'/>,
            }
        ]
    }
]

export default routes;