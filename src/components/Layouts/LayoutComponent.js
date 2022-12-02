import React from "react";
import FooterComponent from "../Footer/FooterComponent";
import HeaderComponent from "../Header/HeaderComponent";

const LayoutComponent = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <main className="main">
        <div className="container">
          {children}
          </div>
      </main>

      <FooterComponent />
    </>
  );
};

export default LayoutComponent;
