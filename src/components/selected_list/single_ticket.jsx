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
      ID:{props.data.identifier} TIRE:{props.data.tire}
    </div>
  );
};

export default SingleTicket;
