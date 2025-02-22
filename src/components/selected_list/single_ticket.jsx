import React from "react";
import "./single_ticket.css";
const SingleTicket = (props) => {
  console.log("1---3", props);
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
    </div>
  );
};

export default SingleTicket;
