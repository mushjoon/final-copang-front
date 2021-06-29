import React from "react";
import ProductInfo from "../purchase/component_orderpage/ProductInfo";
import "./Orderpage.css";

function OrderPageApp({ location }) {
  return (
    <div className="container">
      <ProductInfo location={location} />
    </div>
  );
}

export default OrderPageApp;
