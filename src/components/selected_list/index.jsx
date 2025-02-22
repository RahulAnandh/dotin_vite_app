import React from "react";
import "./index.css";
import StatusCard from "./status_card";
import SingleTicket from "./single_ticket";
import { useSelector, useDispatch } from "react-redux";

const SelectedList = () => {
  const booking = useSelector((state) => state.booking);

  return (
    <div>
      <StatusCard />
      {booking.selected_seats_array.map((data) => {
        return <SingleTicket data={data} />;
      })}
    </div>
  );
};

export default SelectedList;
