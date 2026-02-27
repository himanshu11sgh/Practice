
import dayjs from "dayjs";

export function DeliveryDate({SelectedDeliveryOption}) {
  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(SelectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D",
      )}
    </div>
  )
}