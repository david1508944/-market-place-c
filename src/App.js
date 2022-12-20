import { Outlet, useNavigate } from "react-router";
import Header from "./common/header/Header";
import { useEffect } from "react";

import './App.css'


const App = () => {
  



  return (
    <>
      <Header />
      <div className="container">
        <Outlet />  
      </div>
    </>
  );
}

export default App;
