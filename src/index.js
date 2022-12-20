import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {RouterProvider, createBrowserRouter} from "react-router-dom"


import routes from './routes';
import { store } from './redux/store';


const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </Suspense>
);

