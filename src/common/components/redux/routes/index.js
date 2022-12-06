import App from "../../../../App"
import { lazy } from "react";
import {Navigate} from "react-router-dom"
import Login from "../../Login";
import Registration from "../../Registration";
import Header from "../../../header/Header";
const Authentication = lazy(() => import('../../pages/Authentication'))
const routes = [
    {
        path: '/',
        element: <App />,
        children: [
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
                path: 'header',
                element: <Header />
            },
            {
                path: '*',
                element: <Navigate to='/' />,
            }
        ]
    },

]



export default routes