import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider, createBrowserRouter} from "react-router-dom"

import {store} from './common/components/redux/store'
import routes from "../src/common/components/redux/routes"

import './App.css';


const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Suspense>
);
