import React, { useState } from "react";
import Screen from "./screen";
import "./index.css";
import SingleSeat from "./single_seat";
import { useSelector, useDispatch } from "react-redux";
import { setSeatsData } from "../../features/booking/bookingSlice";

const Content = () => {
  const booking = useSelector((state) => state.booking);

  const dispatch = useDispatch();
  return (
    <div className="body_container">
      <div className="screen_container">
        <Screen />
      </div>
      <div className="seat_container">
        {booking.seatData.map((row, rowIndex) => {
          return (
            <div className="raw_view" key={rowIndex}>
              {row.map((seat, seatIndex) => {
                return (
                  <div
                    key={seatIndex}
                    className={
                      seat.selected
                        ? "column_view_booked"
                        : "column_view_not_booked"
                    }
                    onClick={() => {
                      dispatch(
                        setSeatsData({
                          rowIndex: rowIndex,
                          seatIndex: seatIndex,
                        })
                      );
                    }}
                  >
                    <SingleSeat seat={seat} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
