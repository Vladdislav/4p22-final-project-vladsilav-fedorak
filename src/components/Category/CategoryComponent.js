import "./CategoryComponent.css";
function CategoryComponent({ OnClick = () => {} }) {
  const OnClickEvent = (e) => {
    OnClick(e);
  };
  return (
    <>
      <ul className="category">
        <li className="category__item">
          <p id="all" className="category__link" onClick={OnClickEvent}>
            All
          </p>
        </li>
        <li className="category__item">
          <p id="jewelery" className="category__link" onClick={OnClickEvent}>
            jewelery
          </p>
        </li>
        <li className="category__item">
          <p id="electronics" className="category__link" onClick={OnClickEvent}>
            electronics
          </p>
        </li>
        <li className="category__item" >
          <p id="women's clothing" className="category__link" onClick={OnClickEvent}>
            women's clothing
          </p>
        </li>
        <li className="category__item" >
          <p id="men's clothing" className="category__link" onClick={OnClickEvent}>
            men's clothing
          </p>
        </li>
      </ul>
    </>
  );
}

export default CategoryComponent;
