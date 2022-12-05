import "./IndexPage.css";
import MainContentComponent from "../../components/MainContent/MainContentComponent";
import CardLayout from "../../components/Layouts/LayoutCard/CardLayout";
import CardComponent from "../../components/Card/CardComponent";
import { useEffect, useState } from "react";

function IndexPage() {
  
  const [products, setProducts] = useState([]);
  const [inputValue , setInputValue] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((responce) => responce.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  // filter poructs from input
  useEffect(() => {
    let filteredProduct = [];
    setInputValue(localStorage.getItem('inputValue'));
    filteredProduct = products.filter((item) =>
      item.title.toLocaleLowerCase().includes(inputValue.toLowerCase())
    );
    setFilterProduct(filteredProduct);
  }, [setInputValue, products, inputValue]);

  return (
    <>

      
        <MainContentComponent />
        <CardLayout>
          {filterProduct.map((item, index) => {
            return (
              <CardComponent
                key={index}
                img={item.image}
                id={item.id}
                nameProduct={item.title}
                descProduct={item.description}
                price={item.price}
              />
            );
          })}
        </CardLayout>
      
    </>
  );
}

export default IndexPage;
