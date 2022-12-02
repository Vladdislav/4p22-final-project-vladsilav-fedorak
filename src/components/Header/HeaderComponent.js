import "./HeaderComponent.css";
import SearchBarComponent from "../SearchBar/SearchBarComponent";
import React from "react";
import UserCartComponent from "../UserCart/UserCartComponent";
import LogoComponent from "../Logo/LogoComponent";


class HeaderComponent extends React.Component {
  componentDidMount() {
    // const subList = document.querySelector('.category')
    // subList.__reactProps$it0c758rpk.children.forEach((item) => {
    //   item[1].props.children.props[0]
    // });
  }

  render() {
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
                    <a className="nav__link">ALL PRODUCTS</a>
                  </li>
                  <li id="category" className="nav__item">
                    <a className="nav__link">CATEGORY</a>
                    <ul className="category">
                      <li className="category__item">
                        <a id="jewelery" className="nav__link">
                          jewelery
                        </a>
                      </li>
                      <li className="category__item">
                        <a id="electronics" className="nav__link">
                          electronics
                        </a>
                      </li>
                      <li className="category__item">
                        <a id="women's clothing" className="nav__link">
                          women's clothing
                        </a>
                      </li>
                      <li className="category__item">
                        <a id="men's clothing" className="nav__link">
                          men's clothing
                        </a>
                      </li>
                    </ul>
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
                <UserCartComponent />
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default HeaderComponent;
