import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { useLocation } from "react-router-dom";
import {
  faXmark,
  faSearch,
  faHeart,
  faCartShopping,
  faBars,
  faAngleRight,
  faMobile,
  faLaptop,
  faLifeRing,
  faMicrochip,
  faFirstAid,
  faHeadphones,
  faStar,
  faMale,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Header = ({ user }) => {
  const categories = [
    {
      category: "Mobiles",
      types: ["iPhone", "FeaturePhone", "AndroidPhone", "Tablets"],
      icon: faMobile,
    },
    {
      category: "Laptops",
      types: ["MacOs", "Windows", "Gaming", "Linux"],
      icon: faLaptop,
    },
    {
      category: "Wearables",
      types: ["FitnessTracker", "SmartWatch", "HybridSmartWatch"],
      icon: faLifeRing,
    },
    {
      category: "Tech Accessories",
      types: [
        "Mobile-Chargers",
        "StorageDevices",
        "ScreenProtectors",
        "Cases/Covers",
        "PowerBanks",
      ],
      icon: faMicrochip,
    },
    {
      category: "Audio Store",
      types: [
        "Headphones",
        "EarBuds",
        "Wired Earphones",
        "NeckBands",
        "HeadSets",
        "Speakers",
        "Bluetooth Speakers",
        "SoundBars",
        "HomeTheatre System",
      ],
      icon: faHeadphones,
    },
    {
      category: "Smart Gadgets",
      types: [
        "Smart Locks and Safes",
        "Security Camera",
        "Smart Plugs",
        "Torches",
        "Extension Boards",
      ],
      icon: faStar,
    },
    {
      category: "Health Gadgets",
      types: ["HairDryers", "Trimmers", "OralCare", "HairStylers", "Epilators"],
      icon: faFirstAid,
    },
    {
      category: "Personal Care",
      types: ["HairDryers", "Trimmers", "OralCare", "HairStylers", "Epilators"],
      icon: faMale,
    },
  ];

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(isHomePage);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close the menu when the location changes (navigating to another page)
    if (!isHomePage && isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
  }, [location.pathname]);

  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-left">
          <div className="header-title">
            <h1>GOG</h1>
          </div>
          <div className="header-list">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Shop</li>
              <li>Gadgets</li>
              <li>{!user && <Link to="/login">Login</Link>}</li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-right">
          {user && (<Link to="/myAccount">
            <p>My Account</p>
          </Link>)}
          <Link to="/wishlist"><FontAwesomeIcon className="header-right-icon" icon={ faHeart } /></Link>
          <Link to="/cart">
            <FontAwesomeIcon
            className="header-right-icon"
            icon={ faCartShopping }
            />
          </Link>
        </div>
      </div>
      <div className="header-search-container">
        <div className="wrapper flexitem">
          <div className="left">
            <div className="dpt-cat">
              <div className="dpt-head">
                <div className="dpt-head-top">
                  <div className="main-text">All Departments</div>
                  <div className="mini-text mobile-hide">Total 1234 Products</div>
                </div>
                <a
                  href="#"
                  className="dpt-trigger mobile-hide"
                  onClick={toggleMenu}
                >
                  {!isMenuOpen && (
                    <FontAwesomeIcon className="header-bars" icon={faBars} />
                  )}
                  {isMenuOpen && (
                    <FontAwesomeIcon className="header-bars" icon={faXmark} />
                  )}
                </a>
              </div>

              <div className="categories">
                {isMenuOpen &&
                  categories.map((category, index) => (
                    <div key={index} className="category has-child">
                      <a href="#">
                        <div className="category-list">
                          <div className="category-left">
                            <FontAwesomeIcon
                              className="category-icon"
                              icon={category.icon}
                            />
                            {category.category}
                          </div>
                          <div className="category-right">
                            <FontAwesomeIcon icon={faAngleRight} />
                          </div>
                        </div>
                      </a>
                      <ul>
                        {category.types.map((type, typeIndex) => (
                          <li key={typeIndex}>
                            <a href={`/${type.toLowerCase()}`}>{type}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="header-search">
            <div className="header-search-left">
              <FontAwesomeIcon className="header-search-icon" icon={faSearch} />
              <input placeholder="Search for Products" />
            </div>

            <button>Search</button>
          </div>
        </div>
      </div>
    </div >
  );
};