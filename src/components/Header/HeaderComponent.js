import "./HeaderComponent.css";

import CartIcon from "../../assets/cart-icon.svg";
import LogoComponent from "../Logo/LogoComponent";

function HeaderComponent({ children }) {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="logo">
              <LogoComponent />
            </div>
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a className="nav__link" href="">
                    ALL PRODUCTS
                  </a>
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
              {children}
              <a className="cart" href="">
                <img src={CartIcon} alt="Cart" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;
