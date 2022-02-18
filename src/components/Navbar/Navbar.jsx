import React from "react";
import { images } from "../../constants";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={images.gericht} alt="gericht-logo" className="header__logo" />
        <nav className="nav">
          <ul className="nav__items">
            <li className="nav__item nav__item1">
              <a href="#/" className="nav__link">
                home
              </a>
            </li>
            <li className="nav__item nav__item2">
              <a href="#/" className="nav__link">
                page
              </a>
            </li>
            <li className="nav__item nav__item3">
              <a href="#/" className="nav__link">
                contact us
              </a>
            </li>
            <li className="nav__item nav__item4">
              <a href="#/" className="nav__link">
                blog
              </a>
            </li>
            <li className="nav__item nav__item5">
              <a href="#/" className="nav__link">
                landing
              </a>
            </li>
          </ul>
        </nav>
        <div className="user">
          <a href="#/" className="user__registeration">
            Log In / Registration
          </a>
          <a href="#/" className="user__table-booking">
            Book Table
          </a>
        </div>
      </div>
    </header>
  );
};
