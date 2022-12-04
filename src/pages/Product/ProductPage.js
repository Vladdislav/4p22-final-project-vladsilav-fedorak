import "./ProductPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonComponent from "../../components/Button/ButtonComponent";
import CounterCardComponent from "../../components/CounterCard/CounterCardComponent";

function ProductPage() {
  const { userId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const responce = await fetch(
        `http://fakestoreapi.com/products/${userId}`
      );
      const result = await responce.json();
      setProduct(result);
    })();
  }, []);
  return (
    <>
      <div className="product-id">
        <img className="product-id__image" src={product.image} alt="" />
        

        <div className="product-id__info">
        <h1 className="product-id__title">{product.title}</h1>
        <p className="product-id__desc">{product.description}</p>
        <p className="product-id__price">$ {product.price}</p>
        <div className="card__btn-counter product-id__btn-counter">
          <CounterCardComponent
          idCard={product.id}/>
        </div>
        <div className="card__btn product-id__btn-container">
          <ButtonComponent
            className="btn btn-add product-id__btn"
            name="add-card"
            id="add-card"
            type="button"
            value="add"
          >
            Add
          </ButtonComponent>
          <ButtonComponent
            className="btn btn-remove product-id__btn"
            name="remove-card"
            id="remove-card"
            type="button"
            value="remove"
          >
            Delete
          </ButtonComponent>
        </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
