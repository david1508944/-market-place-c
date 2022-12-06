import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import { Provider } from 'react-redux';
import {store} from '../src/common/components/redux/store'
import routes from "../src/common/components/redux/routes"
import {RouterProvider, createBrowserRouter} from "react-router-dom"

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Suspense fallback = {<div>Loading...</div>}>
  <Provider store={store}>
  < RouterProvider router={router}/>
  </Provider>
 
</Suspense>
);