import "./IndexPage.css";
import MainContentComponent from "../../components/MainContent/MainContentComponent";
import CardLayout from "../../components/Layouts/LayoutCard/CardLayout";
import CardComponent from "../../components/Card/CardComponent";
import { useEffect, useState } from "react";

function IndexPage() {
  
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    fetch("http://fakestoreapi.com/products")
      .then((responce) => responce.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  // filter poructs from input
  useEffect(() => {
    let filteredProduct = [];
    filteredProduct = products.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilterProduct(filteredProduct);
  }, [inputValue, products]);

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
                onClick={() => console.log(item.title)}
              />
            );
          })}
        </CardLayout>
      
    </>
  );
}

export default IndexPage;
