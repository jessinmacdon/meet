import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      numberOfEvents: 32,
    };
  }

  updateNumberOfEvents = (event) => {
    this.setState({
      numberOfEvents: event.target.value,
      infoText: ''
    });
   if (event.target.value > 0 && event.target.value < 33) {
      this.props.updateEventNumbers(event.target.value);
    } else {
      this.setState({ infoText: "Select a number between 1 and 32!" });
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label className="numberOfEvents__label">Number of Events</label>
        <div>
          <ErrorAlert text={this.state.infoText} />
        </div>
        <input
          type="number"
          className="numberOfEvents__input"
          value={this.state.numberOfEvents}
          onChange={this.updateNumberOfEvents}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;

