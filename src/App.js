import React from "react";
import "./App.css";
import FeedbackPage from "./pages/Feedback/FeedbackPage";
import CartPage from "./pages/Cart/CartPage";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/Index/IndexPage";
import DefaultLayout from "./components/Layouts/DefaultLayout/DefaultLayout";
import ProductPage from "./pages/Product/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
          <Route path={"feedback"} element={<FeedbackPage />} />
          <Route path={"cart"} element={<CartPage />} />
          <Route path={"products"}  >
          <Route path={':userId'} element={<ProductPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
