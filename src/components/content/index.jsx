import React, { useEffect, useState } from "react";
import Screen from "./screen";
import "./index.css";
import SingleSeat from "./single_seat";
import { useSelector, useDispatch } from "react-redux";
import {
  setSeatsData,
  addCount,
  substractCount,
  updateSelectedTicket,
  updateSeatData,
  updateTotalPrice,
} from "../../features/booking/bookingSlice";

const Content = () => {
  const booking = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  useEffect(() => {
    if (booking.count > 8) {
      alert("You can only select up to 8 seats");
    }
  }, [booking]);

  return (
    <div className="screen_seat_container">
      <div className="screen_container">
        <Screen />
      </div>
      <div>
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
                        updateSeatData({
                          rowIndex: rowIndex,
                          seatIndex: seatIndex,
                        })
                      );
                      if (
                        booking.seatData[rowIndex][seatIndex].selected === false
                      ) {
                        dispatch(addCount());
                        dispatch(
                          updateTotalPrice({
                            price:
                              booking.totlaPrice +
                              (booking.seatData[rowIndex][seatIndex].tire ===
                              "Silver"
                                ? 100
                                : booking.seatData[rowIndex][seatIndex].tire ===
                                  "Gold"
                                ? 150
                                : 200),
                          })
                        );
                        dispatch(
                          updateSelectedTicket({
                            updatedArray: [
                              ...booking.selected_seats_array,
                              booking.seatData[rowIndex][seatIndex],
                            ],
                          })
                        );
                      }
                      if (
                        booking.seatData[rowIndex][seatIndex].selected === true
                      ) {
                        dispatch(substractCount());
                        dispatch(
                          updateTotalPrice({
                            price:
                              booking.totlaPrice -
                              (booking.seatData[rowIndex][seatIndex].tire ===
                              "Silver"
                                ? 100
                                : booking.seatData[rowIndex][seatIndex].tire ===
                                  "Gold"
                                ? 150
                                : 200),
                          })
                        );

                        dispatch(
                          updateSelectedTicket({
                            updatedArray: booking.selected_seats_array.filter(
                              (obj) =>
                                obj.id !==
                                booking.seatData[rowIndex][seatIndex].id
                            ),
                          })
                        );
                      }
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
