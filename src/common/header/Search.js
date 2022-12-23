import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartsSelector } from "../../redux/slices/cartSlice";
import  logo  from "../components/assets/images/logo.png"
import './Header.css'

const Search = () => {
  const cart = useSelector(cartsSelector)

  useEffect(() => {
    const listener = function(){
      const search = document.querySelector(".search")
      search.classList.toggle("active",window.scrollY  > 100)
    }
    document.addEventListener("scroll", listener)
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [])

  
  console.log(cart)

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search" />
            <span>All Category</span>
          </div>
          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{cart.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
