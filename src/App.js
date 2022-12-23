import { Outlet, useNavigate } from "react-router";
import Header from "./common/header/Header";
import { useEffect } from "react";

import './App.css'
import Header from './common/header/Header'
import Head from './common/header/Head'

const App = () => {
  return (
    <>
      {/* <Head/> */}
      <Header />
      <Outlet/>
    </>
  );
}

export default App;

