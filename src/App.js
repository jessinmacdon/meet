import React, { Component } from "react";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import CitySearch from "./CitySearch";
import { getEvents, extractLocations, checkToken, /*getAccessToken*/ } from "./api";
//import { Alert } from "react-bootstrap";
import { OfflineAlert } from './Alert';
//import WelcomeScreen from "./WelcomeScreen";

import "./App.css";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    location: "all",
    //showWelcomeScreen: undefined,
  };

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
          numberOfEvents: eventCount,
        });
      }
    });
  };

  updateEventNumbers = (eventNumbers) => {
    this.setState({
      numberOfEvents: eventNumbers,
    });
    this.updateEvents(this.state.location, eventNumbers);
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }
    if (!navigator.onLine) {
      this.setState({
        OfflineAlertText: 'You are offline. Connect to tne internet to update!'
      });
    } else {
      this.setState({
        OfflineAlertText: ''
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    /* if (this.state.showWelcomeScreen === true)
       return (
         <WelcomeScreen
           showWelcomeScreen={this.state.showWelcomeScreen}
           getAccessToken={() => {
             getAccessToken();
           }}
         />
       );*/
    const { OfflineAlertText } = this.state;
    return (
      <div className="App">
        <NumberOfEvents updateEventNumbers={this.updateEventNumbers} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <OfflineAlert text={OfflineAlertText} />
      </div>
    );
  }
}

export default App;
