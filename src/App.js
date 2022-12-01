import React from "react";
import { Helmet } from "react-helmet";
import icon from './assets/Icon.ico'
import "./App.css";
import "./ResetComponent.css";
import HeaderComponent from "./components/Header/HeaderComponent";
import LayoutComponent from "./components/Layouts/LayoutComponent";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>California</title>
        <link id="favicon" rel="icon" href={icon} type="image/x-icon"/>
        {/* <link rel='icon' href={icon}/> */}
      </Helmet>

      <LayoutComponent>
      </LayoutComponent>
      
    </>
  );
}

export default App;
