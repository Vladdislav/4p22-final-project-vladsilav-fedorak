import "./HeaderComponent.css";
import SearchBarComponent from "../SearchBar/SearchBarComponent";
import React from "react";
import UserCartComponent from "../UserCart/UserCartComponent";
import LogoComponent from "../Logo/LogoComponent";

function HeaderComponent() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="logo">
              <LogoComponent/>
            </div>
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a className="nav__link">ALL PRODUCTS</a>
                </li>
                <li className="nav__item">
                  <a className="nav__link">SOLUTIONS</a>
                </li>

                <li className="nav__item">
                  <a className="nav__link">ABOUT</a>
                </li>
                <li className="nav__item">
                  <a className="nav__link">SUPPORT</a>
                </li>
              </ul>
            </nav>

            <div className="user-content">
              <SearchBarComponent
                name=""
                id="search-bar"
                type="search"
                placeholder="Введите запрос"
                onChange={(e) => e.target.value}
              />
              <UserCartComponent/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default HeaderComponent;
