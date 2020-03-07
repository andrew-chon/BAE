import React from "react";

function attendeeCard(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden mb-1 shadow">
      <div className="grid grid-cols-6 gap-1 shadow border">
        <div className="col-span-1">
          <img
            alt=""
            src="https://i.imgur.com/8Km9tLL.jpg"
            className="rounded-full border-solid border-white border-2 mt-1 mb-1"
          />
        </div>
        <div className="col-span-5 flex items-center justify-center">
          {props.attendee.firstName} {props.attendee.lastName}
        </div>
      </div>
    </div>
  );
}

export default attendeeCard;
