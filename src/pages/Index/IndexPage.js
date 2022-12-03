import './IndexPage.css'
import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderComponent from "../../components/Header/HeaderComponent";
import SearchBarComponent from "../../components/SearchBar/SearchBarComponent";
import DefaultLayout from "../../components/Layouts/DefaultLayout/DefaultLayout";
import MainContentComponent from "../../components/MainContent/MainContentComponent";
import CardLayout from "../../components/Layouts/LayoutCard/CardLayout";
import CardComponent from "../../components/Card/CardComponent";
import icon from "../../assets/Icon.ico";
import "../../ResetComponent.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function IndexPage() {

  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    fetch("http://fakestoreapi.com/products")
      .then((responce) => responce.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>California</title>
        <link id="favicon" rel="icon" href={icon} type="image/x-icon" />
      </Helmet>
      <HeaderComponent>
        <SearchBarComponent
          name="search-bar"
          id="search-bar"
          type="search"
          placeholder="Enter a request"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </HeaderComponent>

      <DefaultLayout>
        <MainContentComponent />
        <CardLayout>
          {products.map((item, index) => {
            return (
              <CardComponent
                key={index}
                img={item.image}
                nameProduct={item.title}
                descProduct={item.description}
                price={item.price}
                onClick={() => console.log(item.title)}
              />
            );
          })}
        </CardLayout>
      </DefaultLayout>
      <FooterComponent />
    </>
  );
}

export default IndexPage;
