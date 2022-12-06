import CategoryComponent from "../../Category/CategoryComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInputValue } from "../../../store/Input/InputSlice";
import "./CardLayout.css";
import CardComponent from "../../Card/CardComponent";
function LayoutCardComponent() {
  const inputValue = useSelector((state) => state.input.payload);
  const [products, setProducts] = useState([]);
  const [CategoryValue, setCategoryValue] = useState('');

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((responce) => responce.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  // filter poructs fro input

  return (
    <>
      <section className="product">
        <div className="product__content">
          <h2 className="product__title">Save on our most selled items.</h2>
          <p className="product__description">
            Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
          </p>
        </div>
        <div className="product__category">
          <CategoryComponent 
            OnClick={(e) => setCategoryValue(e.target.innerHTML)}
          />
        </div>
        <div className="product__list">
          {products
            .filter((item) => new RegExp(inputValue, 'i').test(item.title ))
            .filter((item) => item.category === CategoryValue || CategoryValue === "All")
            .map((item, index) => {
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
        </div>
      </section>
    </>
  );
}

export default LayoutCardComponent;
