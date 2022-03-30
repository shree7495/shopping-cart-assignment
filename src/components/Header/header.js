import logo from "../../images/logo.png";
import { ReactComponent as CartIcon } from "../../images/cart.svg";
import { Outlet, Link } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";

function Header() {
  const cartItems = useSelector(selectCartItems);
  let navigate = useNavigate();
  const goTo = () => {
    navigate("/home", true);
  };
  return (
    <Fragment>
      <header className="App-header">
        <img onClick={goTo} src={logo} alt="logo" />
        <div className="header-smallscreen">
          <CartIcon className="cart-icon" />
          <Link className="main-nav-link" to="/cart">
            {cartItems.length} items
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li className="el-1">
              <Link className="main-nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="el-2">
              <Link className="main-nav-link" to="/products">
                Product
              </Link>
            </li>
            <li className="el-3">
              <Link className="main-nav-link" to="/signIn">
                SignIn
              </Link>
            </li>
            <li className="el-4">
              <Link className="main-nav-link" to="/signUp">
                SignUp
              </Link>
            </li>
            <li className="el-5">
              <CartIcon className="cart-icon" />
              <Link
                // onClick={toggleIsCartOpen}
                className="main-nav-link"
                to="/cart"
              >
                {cartItems.length} item
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
}

export default Header;
