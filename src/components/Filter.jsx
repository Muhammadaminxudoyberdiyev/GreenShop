import { useState } from "react";
import Mockdata from "../../data/data";
import { data, NavLink } from "react-router-dom";
import Shop from '../pages/Shop'

function Filter() {
  const [category, setCategory] = useState("All Plants");
  const [price, setPrice] = useState([39, 1230]);
  const [selected, setSelected] = useState("");
  const [size, setSize] = useState("");
  const [acitveIcon, setActiveIcon] = useState([])
  const [selectedPage, setSelectedPage] = useState(1)
  const [cardPage, setCardPage] = useState(6)
  const [shopedCards, setShopedCards] = useState([])

  const shopedCardsfilter = (shoped) => {
    setShopedCards([...shopedCards, shoped])
  }

  
  const Data = Mockdata.filter((item) => {
    const categories = item.category;
    const categoryMatch = category === "All Plants" || categories.includes(category);

    const itemPrice = parseFloat(item.price.slice(1));
    const priceMatch = itemPrice >= price[0] && itemPrice <= price[1];

    const sizeMatch = size === "" || item.size === size;

    return categoryMatch && priceMatch && sizeMatch;
  });
  
  const propsToShop = (id) => {
    setShopedCards((prev) => 
      prev.find((item) => item.id === id) ? prev : [...prev, Mockdata.find((i) => i.id === id)]
    )
  }
  
  console.log("shopedCards", shopedCards)

  const activeHeart = (id) => {
    setActiveIcon((prev) => {
     return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    })
  }


  console.log("Data:", Data);

  const endPage = selectedPage * cardPage;
  const startPage = endPage - cardPage;
  const cardsToShow = Data.slice(startPage, endPage)
  const pageCount = Math.ceil(Data.length / cardPage)


  const getCategoryCount = (cate) => {
    return Mockdata.filter(item => item.category.includes(cate)).length;
  }

  const getSizeCount = (siz) => {
    return Mockdata.filter(item => item.size.includes(siz)).length;
  }
  
  localStorage.setItem("shopedCards", JSON.stringify(shopedCards));

  return (
    <>
      <div className="menu-container">
        <div className="category-wrapper">
          <h3 className="category-title">Categories</h3>
          <ul className="category">
            <li className={category === "House Plants"? "active" : ""} onClick={() => setCategory("House Plants")}>
              House Plants <span>({getCategoryCount("House Plants")})</span>
            </li>
            <li className={category === "Potter Plants"? "active" : ""} onClick={() => setCategory("Potter Plants")}>
              Potter Plants <span>({getCategoryCount("Potter Plants")})</span>
            </li>
            <li className={category === "Seeds"? "active" : ""} onClick={() => setCategory("Seeds")}>
              Seeds <span>({getCategoryCount("Seeds")})</span>
            </li>
            <li className={category === "Small Plants"? "active" : ""} onClick={() => setCategory("Small Plants")}>
              Small Plants <span>({getCategoryCount("Small Plants")})</span>
            </li>
            <li className={category === "Big Plants"? "active" : ""} onClick={() => setCategory("Big Plants")}>
              Big Plants <span>({getCategoryCount("Big Plants")})</span>
            </li>
            <li className={category === "Succulents"? "active" : ""} onClick={() => setCategory("Succulents")}>
              Succulents <span>({getCategoryCount("Succulents")})</span>
            </li>
            <li className={category === "Terrariums"? "active" : ""} onClick={() => setCategory("Terrariums")}>
              Terrariums <span>({getCategoryCount("Terrariums")})</span>
            </li>
            <li className={category === "Gardening"? "active" : ""} onClick={() => setCategory("Gardening")}>
              Gardening <span>({getCategoryCount("Gardening")})</span>
            </li>
            <li className={category === "Accessories"? "active" : ""} onClick={() => setCategory("Accessories")}>
              Accessories <span>({getCategoryCount("Accessories")})</span>
            </li>
          </ul>
        </div>
        <div className="price-range-wrapper">
          <h3 className="price-range-title">Price Range</h3>
          <input
            className="price-input"
            type="range"
            min={39}
            max={1230}
            value={price[1]}
            onChange={(e) => setPrice([price[0], e.target.value])}
          />
          <p className="select-price">
            Price: {""}
            <span className="price-span">
              ${price[0]} - ${price[1]}
            </span>
          </p>
          <button className="filter-btn">Filter</button>
        </div>
        <div className="size-wrapper">
          <h3 className="size-title">Size</h3>
          <ul className="size">
            <li onClick={() => setSize('small')}>
              Small <span>({getSizeCount("small")})</span>
            </li>
            <li onClick={() => setSize('medium')}>
              Medium <span>({getSizeCount("medium")})</span>
            </li>
            <li onClick={() => setSize('large')}>
              Large <span>({getSizeCount("large")})</span>
            </li>
          </ul>
        </div>
        <img src="/banner.svg" alt="banner" />
      </div>
      <div className="filter-cards-container">
        <div className="filter-links">
          <ul>
            <li className="active">All Plants</li>
            <li>New Arrivals</li>
            <li>Sale</li>
            <li className="filter-hr">
              <hr />
            </li>
            <li>
              Sort by:
              <select
                className="select_option"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                <option value="select1">Default sorting</option>
                <option value="select2">All Plants</option>
                <option value="select3">New Arrivals</option>
                <option value="select4">Sale</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="cards-container">
          {cardsToShow.map((item) => (
            <div className="card" key={item.id}>
              <img src={`/greenshop${item.id}.svg`} alt={item.name} />
              <div className="icon_wrappers">
                <i className={`fa-solid fa-cart-shopping ${shopedCards.some(card => card.id === item.id) ? 'shoped-card': ''}`} onClick={() => propsToShop(item.id)}></i>
                <i className={`${acitveIcon.includes(item.id) ? "heart_active" : ""} fa-regular fa-heart`} onClick={() => activeHeart(item.id)}></i>
                <NavLink to="search">
                  <img src="/search.svg" alt="shop" />
                </NavLink>  
              </div>
              <h3 className="card-title">{item.name}</h3>
              <p className="price-select">
                {item.price} {item.oldprice && <span>{item.oldprice}</span>}
              </p>
            </div>
          ))}
          <div className="pagination">
          {pageCount > 1 && (
            <>
              <button
                className={selectedPage === 1 ? "p-active" : ""}
                onClick={() => setSelectedPage(1)}
              >
                1
              </button>
              {pageCount > 1 && (
                <button
                  className={selectedPage === 2 ? "p-active" : ""}
                  onClick={() => setSelectedPage(2)}
                >
                  2
                </button>
              )}
            </>
          )}
        </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
