import React from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "../../Footer/FooterComponent";
import HeaderComponent from "../../Header/HeaderComponent";
import SearchBarComponent from "../../SearchBar/SearchBarComponent";
import { useEffect, useState } from "react";
// import CardComponent from "../../Card/CardComponent";
// import CardLayout from "../../Layouts/LayoutCard/CardLayout";
// import MainContentComponent from "../../MainContent/MainContentComponent";
import { Helmet } from "react-helmet";
import icon from "../../../assets/Icon.ico";

function DefaultLayout() {
    
 
 
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>California</title>
        <link id="favicon" rel="icon" href={icon} type="image/x-icon" />
      </Helmet>

      <HeaderComponent/>

      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default DefaultLayout;
