import "./CategoryComponent.css";
function CategoryComponent() {


  return (
    <>
      <ul className="category">
      <li className="category__item">
          <a id="all" className="category__link" href="">
            ALL
          </a>
        </li>
        <li className="category__item">
          <a id="jewelery" className="category__link" href="">
            jewelery
          </a>
        </li>
        <li className="category__item">
          <a id="electronics" className="category__link" href="">
            electronics
          </a>
        </li>
        <li className="category__item">
          <a id="women's clothing" className="category__link" href="">
            women's clothing
          </a>
        </li>
        <li className="category__item">
          <a id="men's clothing" className="category__link" href="">
            men's clothing
          </a>
        </li>
      </ul>
    </>
  );
}

export default CategoryComponent;
