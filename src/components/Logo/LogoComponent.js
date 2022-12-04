import "./LogoComponent.css";
import logo from "../../assets/logo.svg";
function LogoComponent() {
  return (
    <>
      <img className="logo-svg" src={logo} />
    </>
  );
}

export default LogoComponent;
