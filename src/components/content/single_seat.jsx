import React from "react";
import { Popover } from "antd";

const SingleSeat = (props) => {
  return (
    <Popover
      title={
        <div>
          <div>ID : {props.seat.identifier}</div>
          <br />
          <div>TIRE :{props.seat.tire}</div>
          <br />
          <div>
            PRICE :&#8377;
            {props.seat.tire === "Silver"
              ? 100
              : props.seat.tire === "Gold"
              ? 150
              : 200}
          </div>
        </div>
      }
    >
      <div>{props.seat.identifier}</div>
    </Popover>
  );
};

export default SingleSeat;
