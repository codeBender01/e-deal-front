import React from "react";
import Categories from "../Categories/Categories";
import Select from "../Dropdown/Dropdown";
import { BsBell } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./navbar.scss";

const dropdownCats = [
  {
    key: "c1",
    title: "Motors",
    value: [
      "Parts & Accesories",
      "Cars & Trucks",
      "Motorcycles",
      "Other vehicles",
    ],
  },
  {
    key: "c2",
    title: "Electronics",
    value: [
      "Parts & Accesories",
      "Cars & Trucks",
      "Motorcycles",
      "Other vehicles",
    ],
  },
  {
    key: "c3",
    title: "Collectibles & Art",
    value: [
      "Parts & Accesories",
      "Cars & Trucks",
      "Motorcycles",
      "Other vehicles",
    ],
  },
  {
    key: "c4",
    title: "Clothing & Accessories",
    value: [
      "Parts & Accesories",
      "Cars & Trucks",
      "Motorcycles",
      "Other vehicles",
    ],
  },
  {
    key: "c5",
    title: "Business & Industrial",
    value: [
      "Parts & Accesories",
      "Cars & Trucks",
      "Motorcycles",
      "Other vehicles",
    ],
  },
  {
    key: "c6",
    title: "Home & Garden",
    value: [
      "Parts & Accesories",
      "Cars & Trucks",
      "Motorcycles",
      "Other vehicles",
    ],
  },
  {
    key: "c7",
    title: "Sporting Goods",
    value: [
      "Parts & Accesories",
      "Cars & Trucks",
      "Motorcycles",
      "Other vehicles",
    ],
  },
  {
    key: "c8",
    title: "Jewelry & Watches",
    value: [
      "Parts & Accesories",
      "Cars & Trucks",
      "Motorcycles",
      "Other vehicles",
    ],
  },
  {
    key: "c9",
    title: "Other Categories",
    value: [
      "Parts & Accesories",
      "Cars & Trucks",
      "Motorcycles",
      "Other vehicles",
    ],
  },
];

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
            <Select options={dropdownCats} />
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

      <Categories />
    </header>
  );
}

export default Navbar;
