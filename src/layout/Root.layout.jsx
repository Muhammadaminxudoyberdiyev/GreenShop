import Logo from "../../public/Group.png";
import Search from "../../public/search.png";
import Basket from "../../public/basket.svg";
import Logout from "../../public/Logout.png";
import Filter from "../components/Filter";
import "../index.css";
import { useState } from "react";
import BpPlants from "../components/BpPlants";
import { NavLink, Outlet } from "react-router-dom";
import Advertising from "../components/Advertising";
import Blog from "../components/Blog";

function App() {
  const [active, setActive] = useState("Home");
  const [activePageLinks, setActivePageLinks] = useState("Home")

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header_child">
            <div className="header_logo">
              <img className="logo" src={Logo} alt="logo" />
            </div>
            <div className="header_links">
              <NavLink className={() => "Home" === activePageLinks ? 'active' : ""} onClick={() => setActivePageLinks("Home")} to="/">Home</NavLink>
              <NavLink className={() => "Shop" === activePageLinks ? 'active' : ""} onClick={() => setActivePageLinks("Shop")} to="shop">Shop</NavLink>
              <NavLink className={() => "Plant Care" === activePageLinks ? 'active' : ""} onClick={() => setActivePageLinks("Plant Care")} to="*">Plant Care</NavLink>
              <NavLink className={() => "Blogs" === activePageLinks ? 'active' : ""} onClick={() => setActivePageLinks("Blogs")} to="*">Blogs</NavLink>
            </div>
            <div className="header_buttons">
              <NavLink to="search">
                <img className="search_icon" src={Search} alt="search" />
              </NavLink>
              <NavLink to="shop">
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
        <main>
          <BpPlants />
          <div className="main-child">
            <Filter />
          </div>
          <Advertising/>
          <Blog/>
        </main>
        <footer>
          <div className="newsletters">
            <div className="newsletters-card">
              <div className="nl-texts">
                <span className="nl-green"></span>
                <img src="../../public/footer2.svg"/>
                <h4>Garden Care</h4>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
              </div>
              <span className="footer-line"></span>
            </div>
            <div className="newsletters-card">
              <div className="nl-texts">
                <span className="nl-green"></span>
                <img src="../../public/footer2.svg"/>
                <h4>Garden Care</h4>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
              </div>
              <span className="footer-line"></span>
            </div>
            <div className="newsletters-card">
              <div className="nl-texts">
                <span className="nl-green"></span>
                <img src="../../public/footer3.svg"/>
                <h4>Garden Care</h4>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
              </div>
              <span className="footer-line"></span>
            </div>
            <div className="nl-input-part">
              <h3>Would you like to join newsletters?</h3>
              <div className="input-btn-wrapper">
                <input type="text" placeholder="enter your email address..."/>
              <button>Join</button>
              </div>
              <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
            </div>
          </div>
          <div className="green-container">
            <img src={Logo} alt="logo" className="logo" />
            <div className="g-part">
              <img src="../../public/Location.png" alt="location" />
              <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
            </div>
            <div className="g-part">
              <img src="../../public/Message.png" alt="location" />
              <p>contact@greenshop.com</p>
            </div>
            <div className="g-part">
              <img src="../../public/Calling.png" alt="location" />
              <p>+88 01911 717 490</p>
            </div>
          </div>
          <div className="footer">
            <div className="footer-links-part">
              <h3>My Account</h3>
              <ul>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Our stores</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Specials</a></li>
              </ul> 
            </div>
            <div className="footer-links-part">
              <h3>Help & Guide</h3>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">How to Buy</a></li>
                <li><a href="#">Shipping & Delivery</a></li>
                <li><a href="#">Product Policy</a></li>
                <li><a href="#">How to Return</a></li>
              </ul> 
            </div>
            <div className="footer-links-part">
              <h3>Categories</h3>
              <ul>
                <li><a href="#">House Plants</a></li>
                <li><a href="#">Potter Plants</a></li>
                <li><a href="#">Seeds</a></li>
                <li><a href="#">Small Plants</a></li>
                <li><a href="#">Accessories</a></li>
              </ul> 
            </div>
            <div className="footer-links-part">
              <h3>Social Media</h3>
              <div className="footer-icons">
                <div className="f-icons"><img src="../../public/Facebook.svg" alt="icon" /></div>
                <div className="f-icons"><img src="../../public/Instagram.svg" alt="icon" /></div>
                <div className="f-icons"><img src="../../public/Twitter.svg" alt="icon" /></div>
                <div className="f-icons"><img src="../../public/Linkedin.svg" alt="icon" /></div>
                <div className="f-icons"><img src="../../public/Union.svg" alt="icon" /></div>
              </div> 
                <h3>We accept</h3>
                <img src="../../public/cards.svg" alt="" />
            </div>
          </div>
          <hr />
          <div className="footer-info">
            <p>© 2021 GreenShop. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
