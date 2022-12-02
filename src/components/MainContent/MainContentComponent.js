import ButtonComponent from "../Button/ButtonComponent";
import "./MainContentComponent.css";

function MainContentComponent() {
  return (
    <>
      <div className="main-content">
        <div className="main-content__wrapper">
          <h1 className="main__content-title">
            The new phones are here take a look.
          </h1>
          <p className="main__content-suptitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            in est dui, aliquam, tempor. Faucibus morbi turpis.
          </p>
          <ButtonComponent
            name="more"
            id="more"
            type="button"
            className="btn btn-more"
            value="more"
          >
            MORE
          </ButtonComponent>
        </div>
      </div>
    </>
  );
}

export default MainContentComponent;
