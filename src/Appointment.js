import React from "react";

export const Appointment = ({ customer: { firstName } }) => (
  <div>{firstName}</div>
);

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map((item, index) => (
        <li key={item.startTime}>{item.startTime}</li>
      ))}
    </ol>
  </div>
);
