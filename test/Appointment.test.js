import React from "react";
import ReactDOM from "react-dom";

import { Appointment, AppointmentsDayView } from "../src/Appointment";

describe("Appointment", () => {
  let customer;
  let container;
  beforeEach(() => {
    container = document.createElement("div");
  });
  const render = (component) => ReactDOM.render(component, container);

  it("renders customer name", () => {
    customer = { firstName: "Kevin" };

    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("Kevin");
  });

  it("renders different name", () => {
    customer = { firstName: "Matt" };

    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("Matt");
  });
});

describe("AppointmentsDayView", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component) => ReactDOM.render(component, container);

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector("div#appointmentsDayView")).not.toBeNull();
  });
});
