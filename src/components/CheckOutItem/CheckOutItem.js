// import { CartItemContainer, ItemDetails } from './cart-item.styles';
import Button from "../Button/Button";
import "./CheckOutItem.css";

const CartItem = ({ cartItem }) => {
  const { name, imageURL, price, quantity } = cartItem;
  console.log();
  return (
    <div className="cartItem-container">
      <img src={imageURL} alt={`${name}`} />
      <div className="cartItem-details">
        <span className="cartItem-name">{name}</span>
        <div className="cartQty-details">
          <div className="qty-container">
            <Button>-</Button>
            <span>{quantity}</span>
            <Button>+</Button>
            <span>x Rs.{price} </span>
          </div>
          <div className="price-container">Rs. {quantity * price}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
