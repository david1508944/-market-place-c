import {Outlet} from 'react-router-dom'
import './App.css'
import Header from './common/header/Header'
import Head from './common/header/Head'

const App = () => {
  return (
    <>
      
      <Header />
      <Outlet/>
    </>
  )
}
export default App;
