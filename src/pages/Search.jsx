import React, { useState } from 'react';
import Mockdata from '../../data/data';
import './Search.css';
import { NavLink } from 'react-router-dom';

function Search() {
  const [search, setSearch] = useState('');
  const [data] = useState(Mockdata);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

    return (
    <div className="search-container">
      <div className="search-wrapper">
      <NavLink to="/"><i className="fa-solid fa-arrow-left-long"></i></NavLink>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="cards-container">
        {filteredData.map((item) => (
          <div className="card" key={item.id}>
            <img src={`/greenshop${item.id}.svg`} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              {item.price} {item.oldprice && <span>{item.oldprice}</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
