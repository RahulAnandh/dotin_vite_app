import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSeatsData } from "../../features/booking/bookingSlice";
import "./status_card.css";

const StatusCard = () => {
  const booking = useSelector((state) => state.booking);

  return (
    <div className="status_box">
      <div>Count:{booking.count} </div>
      <div>Total price:{booking.totlaPrice}</div>
      <button>Book Now</button>
    </div>
  );
};

export default StatusCard;
