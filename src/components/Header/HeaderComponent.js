import "./HeaderComponent.css";

import CartIcon from "../../assets/cart-icon.svg";
import LogoComponent from "../Logo/LogoComponent";
import "../../ResetComponent.css";
import { Link } from "react-router-dom";
import SearchBarComponent from "../SearchBar/SearchBarComponent";

function HeaderComponent() {
  const burger = document.getElementById("burger");
  const navList = document.getElementById("nav-list");
  const clickBurger = (e) => {
    if (burger.classList.toggle("burger--click")) {
      navList.style.display = "block";
    } else {
      navList.style.display = "none";
    }
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="logo">
              <LogoComponent />
            </div>
            <nav className="nav">
              <ul id="nav-list" className="nav__list">
                <li className="nav__item">
                  <Link to={"/"} className="nav__link" href="">
                    Main
                  </Link>
                </li>

                <li className="nav__item">
                  <Link to={"about"} className="nav__link">
                    about
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to={"feedback"} className="nav__link">
                    feedback
                  </Link>
                </li>
              </ul>
              <ul id="burger" onClick={clickBurger} className="burger">
                <li className="burger__line"></li>
                <li className="burger__line"></li>
                <li className="burger__line"></li>
              </ul>
            </nav>

            <div className="user-content">
              <SearchBarComponent
                name="search-bar"
                id="search-bar"
                type="search"
                placeholder="Enter a request"
              />
              <Link to={"cart"} className="cart" href="">
                <img src={CartIcon} alt="Cart" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;
