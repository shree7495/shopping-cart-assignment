import React from "react";
import Button from "../Button/Button";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

export default function Product({ product }) {
  const { name, imageURL, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <div className="product-container">
      <h4>{name}</h4>
      <div className="imgDesc-container">
        <div>
          <img className="product-img" src={imageURL} alt="product-details" />
        </div>
        <div className="descButton-container">
          <p className="prod-desc">{product.description}</p>
          <div className="priceButton-container">
            <p>MRP Rs.{price}</p>
            <Button type="button" HandleOnClick={addProductToCart}>
              Buy now
            </Button>
          </div>
          <div className="priceButton-mobile">
            <Button type="button" HandleOnClick={addProductToCart}>
              <p> Buy now @ MRP Rs.{price}</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
