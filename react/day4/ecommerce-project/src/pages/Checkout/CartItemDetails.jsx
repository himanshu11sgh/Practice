
import {useState} from "react";
import axios from "axios";
import { formatMoney } from "../../utils/money";

export function CartItemDetails({ cartItem, loadCart }) {
  const [isUpdated, setIsUpdated] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  async function deleteCartItem() {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  }

  async function updateHandler() {
    if (isUpdating) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: parseInt(quantity)
      })
      await loadCart();
      setIsUpdated(!isUpdated);
      setIsUpdating(!isUpdating)
    } else {
      setIsUpdated(!isUpdated);
    }
  }

  function quantityHandler(event) {
    setQuantity(event.target.value);
    setIsUpdating(true);
  }

  function quantityKeyDownHandler(event) {
    if (event.key == 'Enter') {
      updateHandler()
    } else if (event.key == 'Escape') {
      setIsUpdated(false);
      setIsUpdating(false);
      setQuantity(cartItem.quantity);
    }
  }

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />
      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity: 
            <input type="text" className={`quantity-input ${!isUpdated && "d-none"}`} value={quantity} onChange={quantityHandler} onKeyDown={quantityKeyDownHandler}/>
            <span className="quantity-label">{cartItem.quantity}</span>
          </span>
          <span className="update-quantity-link link-primary" onClick={updateHandler}>Update</span>
          <span className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >Delete</span>
        </div>
      </div>
    </>
  );
}
