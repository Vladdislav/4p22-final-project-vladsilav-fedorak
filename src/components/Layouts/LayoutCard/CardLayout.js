import CategoryComponent from "../../Category/CategoryComponent";
import "./CardLayout.css";
function LayoutCardComponent({ children }) {
  return (
    <>
      <section className="product">
        <div className="product__content">
            <h2 className="product__title">Save on our most selled items.</h2>
            <p className="product__description">Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>
        <div className="product__category">
        <CategoryComponent/>
        </div>
        <div className="product__list">{children}</div>
      </section>
    </>
  );
}

export default LayoutCardComponent;
