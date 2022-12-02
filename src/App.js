import React from "react";
import { Helmet } from "react-helmet";
import icon from "./assets/Icon.ico";
import "./App.css";
import "./ResetComponent.css";
import LayoutComponent from "./components/Layouts/LayoutComponent";
import MainContentComponent from "./components/MainContent/MainContentComponent";
import LayoutCardComponent from "./components/Layouts/LayoutCardComponent";
import CardComponent from "./components/Card/CardComponent";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://fakestoreapi.com/products")
      .then((responce) => responce.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>California</title>
        <link id="favicon" rel="icon" href={icon} type="image/x-icon" />
      </Helmet>

      <LayoutComponent>
        <MainContentComponent />
        <LayoutCardComponent>
          {products.map((item, index) => {
            return (
              <CardComponent
                key={index}
                img={item.image}
                nameProduct={item.title}
                descProduct={item.description}
                price={item.price}
              />
            );
          })}
        </LayoutCardComponent>
      </LayoutComponent>
    </>
  );
}

export default App;
