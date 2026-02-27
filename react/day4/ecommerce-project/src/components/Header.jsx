import {NavLink} from 'react-router';
import "./Header.css"
import LogoWhiteImg from "../assets/images/logo-white.png";
import MobileLogoWhiteImg from "../assets/images/mobile-logo-white.png";
import CartIconImg from "../assets/images/icons/cart-icon.png";
import SearchIconImg from "../assets/images/icons/search-icon.png";

export function Header({cart}) {
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity
  })
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={LogoWhiteImg} />
          <img className="mobile-logo" src={MobileLogoWhiteImg} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src={SearchIconImg} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders/">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout/">
          <img className="cart-icon" src={CartIconImg} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
