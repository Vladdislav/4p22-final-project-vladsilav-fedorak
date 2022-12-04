import "./CardComponent.css";
import ButtonComponent from "../Button/ButtonComponent";
import CounterCardComponent from "../CounterCard/CounterCardComponent";
import { Link } from "react-router-dom";
function CardComponent({
  img,
  id,
  nameProduct,
  descProduct,
  price,
  onClick = () => {},
}) {
  return (
    <>
      <div className="card">
        <Link to={`products/${id}`}>
          <img
            className="card__image"
            src={img}
            alt="ImageCard"
            onClick={onClick}
          />
        </Link>
        <h3 className="card__title">{nameProduct}</h3>
        <p className="card__desc">{descProduct}</p>
        <p className="card__price">$ {price}</p>
        <div className="card__btn-counter">
          <CounterCardComponent 
          idCard={id}/>
        </div>
        <div className="card__btn">
          <ButtonComponent
            className="btn btn-add"
            name="add-card"
            id="add-card"
            type="button"
            value="add"
          >
            Add
          </ButtonComponent>
          <ButtonComponent
            className="btn btn-remove"
            name="remove-card"
            id="remove-card"
            type="button"
            value="remove"
          >
            Delete
          </ButtonComponent>
        </div>
      </div>
    </>
  );
}
export default CardComponent;
