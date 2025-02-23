import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSeatsData } from "../../features/booking/bookingSlice";
import "./status_card.css";
import { Button, Modal } from "antd";

const StatusCard = () => {
  const booking = useSelector((state) => state.booking);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="status_box">
      <div className={"status_container"}>
        <div className="left_align">Count:</div>
        <div className="right_align">{booking.count}</div>
      </div>
      <div className={"status_container"}>
        <div className="left_align">Total price:</div>
        <div className="right_align">&#8377;{booking.totlaPrice}</div>
      </div>
      <button className="book_now_button" onClick={showModal}>
        Book Now
      </button>
      <Modal
        open={open}
        title="Ticket Summary"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Confirm Booking
          </Button>,
        ]}
      >
        <div className={"status_container"}>
          <div className="left_align">Count:</div>
          <div className="right_align">{booking.count}</div>
        </div>
        <div className={"status_container"}>
          <div className="left_align">Total price:</div>
          <div className="right_align">&#8377;{booking.totlaPrice}</div>
        </div>
        <div className={"status_container"}>
          <div className="left_align">Seats Booked:</div>
          <div className="right_align_selected_tickets">
            {booking.selected_seats_array.map((obj) => {
              return (
                <div className="selected_tickets_summary">
                  {obj.identifier},
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StatusCard;
