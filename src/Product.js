import React from 'react'
import "./Product.css";
import logo from "./image3.jpg"

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>Medical Marijuana</p>
        <p className="product_price">
          <small>$</small>
          <strong>20</strong>
        </p>

<img src={logo} alt=""></img>

<button>Add to Basket</button>

      </div>
    </div>
  )
}

export default Product;
