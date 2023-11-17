// import React from "react";
import "../styles/Header.css";
import {
  faSearch,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      {/* <div className="header-top">
        <div className="header-top-left">
          <ul>
            <li>Featured Products</li>
            <li>Trending Products</li>
            <li>WishList</li>
          </ul>
        </div>
        <div className="header-top-right">
          <ul>
            <li>My Account</li>
            <li>LogOut</li>
          </ul>
        </div>
      </div> */}
      <div className="header-bottom">
        <div className="header-bottom-left">
          <div className="header-title">
            <h1>GOG</h1>
          </div>
          <div className="header-list">
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Gadgets</li>
              <li><Link to='/admin'>Admin</Link></li>
            </ul>
          </div>
        </div>
        <div className="header-right">
          <Link to='/login'><p>Login</p></Link>
          <Link to='/myAccount'><p>My Account</p></Link>
          <FontAwesomeIcon className="header-right-icon" icon={faHeart} />
          <FontAwesomeIcon
            className="header-right-icon"
            icon={faCartShopping}
          />
        </div>
      </div>
      <div className="header-search-container">
        <div className="header-search">
          <div className="header-search-left">
            <FontAwesomeIcon className="header-search-icon" icon={faSearch} />
            <input placeholder="Search for Products" />
          </div>

          <button>Search</button>
        </div>
      </div>
    </div>
  );
};
