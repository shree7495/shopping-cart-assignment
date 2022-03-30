import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import "./CartPage.css";
import lowestImage from "../../images/lowest-price.png";
import Button from "../../components/Button/Button";
import CheckoutItem from "../../components/CheckOutItem/CheckOutItem";
const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  console.log("cartItems", !!cartItems.length);

  return (
    <div className="cart-container">
      <div className="myCart-header">
        <p>
          My Cart
          {!!cartItems.length && <span> ( {cartItems.length} items )</span>}
        </p>
      </div>

      {!cartItems.length && (
        <div className="emptycaritems-container">
          <div className="emptyCart-container">
            <h4>No Items in your Cart</h4>
            <p>your favourites are just a click away</p>
          </div>
        </div>
      )}
      {!!cartItems.length && (
        <div className="caritems-container">
          {cartItems.map((cartItem) => (
            // <div>{cartItem.name}</div>
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}

          <div className="lowestPrice-container">
            <img src={lowestImage} alt="lowest price logo" />
            <p>You won't find find it anywhere cheaper</p>
          </div>
        </div>
      )}
      {!!cartItems.length ? (
        <div className="promo-container">
          <p>Promo Code Can be applied on payment page </p>
          <Button>
            <p>Proceed to Checkout: ${cartTotal}</p>
          </Button>
        </div>
      ) : (
        <Button>
          <p>Start Shopping</p>
        </Button>
      )}
    </div>
  );
};

export default Checkout;
