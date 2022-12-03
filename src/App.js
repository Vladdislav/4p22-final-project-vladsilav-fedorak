import React from "react";
import "./App.css";
import ContactsPage from './pages/Contacts/ContactsPage'
import CartPage from './pages/Cart/CartPage'
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/Index/IndexPage";

function App() {
  

  return (
    <>
      <Routes>
        <Route path={'/'} element ={<IndexPage/>}/>
        <Route path={'contacts'} element ={<ContactsPage/>}/>
        <Route path={'cart'} element ={<CartPage/>}/>
      </Routes>

      

      
    </>
  );
}

export default App;
