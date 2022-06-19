import React from "react";
import { BsBell } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./navbar.scss";

function Navbar() {
  return (
    <header className="nav">
      <div className="top-menu">
        <div className="container">
          <ul className="rg-side">
            <li className="auth">
              Hi!
              <span>Sign in</span>
              or
              <span>Register</span>
            </li>
            <li>Daily deals</li>
            <li>Brand outlet</li>
            <li>Help &#38; Contact</li>
          </ul>
          <ul className="lf-side">
            <li>Sell</li>
            <li className="wtch-list">
              Watchlist <RiArrowDropDownLine className="dropdown" />
            </li>
            <li>
              <BsBell className="icon" size={25} />
            </li>
            <li className="cart">
              <AiOutlineShoppingCart className="icon" size={30} />
            </li>
          </ul>
        </div>
      </div>

      <div className="middle-nav">
        <div className="container">
          <h1 className="logo">e-deal</h1>
          <div className="shop">
            <span>Shop by category</span>
            <RiArrowDropDownLine size={40} />
          </div>
          <div className="search-bar">
            <label className="lbl" htmlFor="search">
              Enter your search keyword
            </label>
            <AiOutlineSearch className="s-icon" />
            <input type="text" placeholder="Search for anything" id="search" />
            <select name="all-cat" id="acat">
              <option value="0">All categories</option>
            </select>
          </div>
          <button className="btn-main">
            <span>Search</span>
            <AiOutlineSearch className="btn-search" size={35} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
