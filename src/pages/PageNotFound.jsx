import React from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../../public/Group.png";
import Search from "../../public/search.png";
import Basket from "../../public/basket.svg";
import Logout from "../../public/Logout.png";

function PageNotFound() {
    const [activePageLinks, setActivePageLinks] = useState("")
  return (
      <div className="container">
              <header className="header">
                <div className="header_child">
                  <div className="header_logo">
                    <img className="logo" src={Logo} alt="logo" />
                  </div>
                  <div className="header_links">
                    <NavLink
                      className={() => ("Home" === activePageLinks ? "active" : "")}
                      onClick={() => setActivePageLinks("Home")}
                      to="/"
                      >
                      Home
                    </NavLink>
                    <NavLink
                      className={() => ("Shop" === activePageLinks ? "active" : "")}
                      onClick={() => setActivePageLinks("Shop")}
                      to="/shop"
                      >
                      Shop
                    </NavLink>
                    <NavLink
                      className={() =>
                        "Plant Care" === activePageLinks ? "active" : ""
                      }
                      onClick={() => setActivePageLinks("Plant Care")}
                      to="/plant-care"
                      >
                      Plant Care
                    </NavLink>
                    <NavLink
                      className={() => ("Blogs" === activePageLinks ? "active" : "")}
                      onClick={() => setActivePageLinks("Blogs")}
                      to="/blog"
                      >
                      Blogs
                    </NavLink>
                  </div>
                  <div className="header_buttons">
                    <NavLink to="/search">
                      <img className="search_icon" src={Search} alt="/search" />
                    </NavLink>
                    <NavLink to="/shop">
                      <img className="basket_icon" src={Basket} alt="shop" />
                    </NavLink>
                    <button className="header_btn">
                      <img className="logout_icon" src={Logout} alt="log_icon" />
                      Login
                    </button>
                  </div>
                </div>
                <hr className="header_hr" />
              </header>
      <div className="pageNf">
          <h1>Page Not Found 💤</h1>
          <h3>🕸️     let's home    🕸️</h3>
          <NavLink to="/">
              <button>Home</button>
          </NavLink>
      </div>
    </div>
  )
}

export default PageNotFound
