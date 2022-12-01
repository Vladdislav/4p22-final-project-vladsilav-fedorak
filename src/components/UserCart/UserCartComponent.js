import "./UserCartComponent.css";
import CartIcon from "../../assets/cart-icon.svg"
 function UserCartComponent() {
  return (
    <>
      <a className="cart" href="#">
        <img src={CartIcon} alt="Cart"/>
      </a>
    </>
  );
}
export default UserCartComponent;