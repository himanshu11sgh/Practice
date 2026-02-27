import {OrderDetail} from "./OrderDetail";

export function OrderDetailsGrid({order, loadCart}) {
  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => {
        return (
          <OrderDetail key={orderProduct.productId} orderProduct={orderProduct} order={order} loadCart={loadCart}/>
        );
      })}
    </div>
  );
}
