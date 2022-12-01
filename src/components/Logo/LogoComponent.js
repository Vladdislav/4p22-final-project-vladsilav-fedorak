import "./LogoComponent.css";
import logo from "../../assets/logo.svg";
function LogoComponent() {
  return (
    <>
      <a className="logo">
        <img className="logo-svg" src={logo} />
      </a>
    </>
  );
}

export default LogoComponent;
