import React from "react";
import "./single_ticket.css";
const SingleTicket = (props) => {
  return (
    <div
      className={
        props.data.tire === "Silver"
          ? "silver"
          : props.data.tire === "Gold"
          ? "gold"
          : "platinum"
      }
    >
      <div className="ticket_id">{props.data.identifier}</div>
      <div className="right_ticket">
        <div className="flex_container">
          <div className="left_align">Tire</div>
          <div className="right_align">{props.data.tire}</div>{" "}
        </div>
        <div className="flex_container">
          <div className="left_align">Price</div>
          <div className="right_align">
            &#8377;
            {props.data.tire === "Silver"
              ? 100
              : props.data.tire === "Gold"
              ? 150
              : 200}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
