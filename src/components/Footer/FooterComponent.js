import "./FooterComponent.css";

import LogoComponent from "../Logo/LogoComponent";

function FooterComponent() {
  return (
    <>
      <div className="container container-footer">
        <div className="logo">
          <LogoComponent />
        </div>

        <h4 className="made-by">Made By:NeverSf</h4>
        <h4 className="made-by">Powered by:Webflow</h4>
      </div>
    </>
  );
}

export default FooterComponent;
