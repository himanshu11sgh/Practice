import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import dayjs from "dayjs";
import { Header } from "../../components/Header";
import "./TrackingPage.css";

export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    (async function () {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`,
      );
      console.log("response.data", response.data);
      setOrder(response.data);
    })();
  }, [orderId]);

  if (!order) {
    return null;
  }
  const selectedProduct = order.products.find((orderProduct) => {
    return orderProduct.product.id == productId;
  });
  console.log('dayjs().valueOf()', dayjs().valueOf())
  const totalDeliveryTimeMs = selectedProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs
  let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
  if (deliveryPercent > 100) {
    deliveryPercent = 100;
  }
  deliveryPercent = 33;
  let progressLabel = 'Preparing';
  if (deliveryPercent >= 33 && deliveryPercent < 100) {
    progressLabel = 'Shipped';
  } else if (deliveryPercent == 100) {
    progressLabel = 'Delivered';
  }
  console.log(selectedProduct);
  return (
    <>
      <title>Tracking</title>
      <link rel="icon" href="/images/favicons/tracking.png" />

      <Header cart={cart} />
      <div className="tracking-page">
        <div className="order-tracking">
          <a className="back-to-orders-link link-primary" href="/orders/">
            View all orders
          </a>
          <div className="delivery-date">
            {(deliveryPercent >= 100) ? "Delivered on " : "Arriving on "  } 
            {dayjs(selectedProduct.estimatedDeliveryTimeMs).format(
              "dddd, MMMM D",
            )}
          </div>

          <div className="product-info">{selectedProduct.product.name}</div>

          <div className="product-info">
            Quantity: {selectedProduct.quantity}
          </div>

          <img className="product-image" src={selectedProduct.product.image} />

          <div className="progress-labels-container">
            <div className={`progress-label ${progressLabel == 'Preparing' && 'current-status'}`}>Preparing</div>
            <div className={`progress-label ${progressLabel == 'Shipped' && 'current-status'}`}>Shipped</div>
            <div className={`progress-label ${progressLabel == 'Delivered' && 'current-status'}`}>Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${deliveryPercent}%`}}></div>
          </div>
        </div>
      </div>
    </>
  );
}
