import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../public/Group.png";
import Search from "../../public/search.png";
import Basket from "../../public/basket.svg";
import Logout from "../../public/Logout.png";

function Shop() {
  const saved = localStorage.getItem("shopedCards");
  const shopedCards = saved ? JSON.parse(saved) : [];

  const Mockdata = shopedCards;

  const [counter, setCounter] = useState(Mockdata.map(() => 1));
  const [handeDelete, setHandleDelete] = useState();
  const [data, setData] = useState(Mockdata);
  const [activePageLinks, setActivePageLinks] = useState("Shop")

  const deleteItem = (id) => {
    const filteredItem = data.filter((item) => {
      return item.id !== id;
    });
    setData(filteredItem);
  };

  const plus = (index) => {
    setCounter((prevCount) =>
      prevCount.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const minus = (index) => {
    setCounter((prevCount) =>
      prevCount.map((count, i) =>
        i === index && count > 1 ? count - 1 : count
      )
    );
  };
  
  return (
    <>
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
                to="plant-care"
                >
                Plant Care
              </NavLink>
              <NavLink
                className={() => ("Blogs" === activePageLinks ? "active" : "")}
                onClick={() => setActivePageLinks("Blogs")}
                to="blog"
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
    </div>
        <div className="shop">
          <div className="shoped-cards-container">
            {data.length === 0 ? 
            <h2 className="not-shoped">Siz hali hech narsa harid qilmadingiz :(</h2> :
              (data.map((item, index) => (
              <div className="shoped-cards" key={item.id}>
                <img
                  src={`../../public/greenshop${item.id}.svg`}
                  alt={item.name}
                />
                <div className="shoped-card-wrapper">
                  <i
                    class="fa-solid fa-trash"
                    onClick={() => deleteItem(item.id)}
                  ></i>
                  <div className="shoped-cards-inner">
                   <h3>{item.name}</h3>
                    <p>${parseFloat(item.price.replace(/[^0-9.]/g, "")) * counter[index]}</p>
                  </div>
                  <div className="counter">
                    <p
                      className={counter[index] === 1 ? "off-button" : ""}
                      onClick={() => minus(index)}
                    >
                      -
                    </p>
                    <h4>{counter[index]}</h4>
                    <p onClick={() => plus(index)}>+</p>
                  </div>
                </div>
              </div>
            )))}
          </div>
        </div>
    </>
  );
}

export default Shop;
