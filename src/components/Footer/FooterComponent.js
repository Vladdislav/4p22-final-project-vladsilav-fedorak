import "./FooterComponent.css";

import LogoComponent from "../Logo/LogoComponent";

function FooterComponent() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <LogoComponent />
        </div>
        <div className="short-info-project">
          <h4 className="made-by">Made By:NeverSf</h4>
          <h4 className="made-by">Powered by:Webflow</h4>
        </div>
      </div>
    </>
  );
}

export default FooterComponent;
