import React from "react";

const SingleSeat = (props) => {
  return (
    <div
      className={props.seat.selected ? "selected_seat" : "not_selected_seat"}
    >
      {props.seat.identifier}
    </div>
  );
};

export default SingleSeat;
