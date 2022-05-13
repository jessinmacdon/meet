import React, { Component } from "react";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import CitySearch from "./CitySearch";
import EventGenre from "./EventGenre";

import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import { Alert, Row, Col } from "react-bootstrap";

import WelcomeScreen from "./WelcomeScreen";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./App.css";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    location: "all",
    showWelcomeScreen: undefined,
  };

  updateEvents = (location, eventCount = this.state.numberOfEvents) => {
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(/[,-]+/).shift();
      return { city, number };
    });

    return data;
  };

  async componentDidMount() {
    this.mounted = true;
    // Only make google api calls when online
    if (navigator.onLine) {
      const accessToken = localStorage.getItem("access_token");
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
    }
    // If offline, load events/data from localStorage
    else {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    // if the app is running on localhost do not show welcome screen
    if (
      this.state.showWelcomeScreen === undefined &&
      navigator.onLine &&
      !window.location.href.startsWith("http://localhost")
    ) {
      return <div className="App" />;
    }
    //Only display the welcome screen if the gh pages url is inputed and if the Access token is not found
    if (this.state.showWelcomeScreen === true)
      return (
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      );

    return (
      <div className="App">
        <div>
          <NumberOfEvents updateEventNumbers={this.updateEventNumbers} />
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          {!navigator.onLine && (
            <Alert variant="warning" style={{ textAlign: "center", color: "black" }}>
              You are now browsing in offline mode. Connect to the internet to see updates for or make changes to your events!!
            </Alert>
          )}
        </div>

        {/* implementing  Pie and scatterChart for data visualisation*/}
        <Row className="chartsBox">
          <Col className="charts" xs={12} md={4}>
            {/* visualise popular events */}
            <h4>Most popular events</h4>
            <EventGenre events={this.state.events} />
          </Col>
          <Col className="charts" xs={12} md={8}>
            <h4>Events by city</h4>
            <ResponsiveContainer height={400} minWidth={400}>
              <ScatterChart
                margin={{
                  top: 20,
                  right: 60,
                  bottom: 20,
                  left: 0,
                }}
              >
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="City" />
                <YAxis
                  type="number"
                  dataKey="number"
                  name="Number of events"
                  allowDecimals={false}
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter data={this.getData()} fill="#f280e3" />
              </ScatterChart>
            </ResponsiveContainer>
          </Col>
        </Row>

        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
