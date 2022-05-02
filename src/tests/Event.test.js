import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<EventList /> component", () => {
    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    test("render an event", () => {
        expect(EventWrapper.find(".event")).toHaveLength(1);
    });

    test("render the location information", () => {
        expect(EventWrapper.find(".location")).toHaveLength(1);
    });

    test("render the summary of the event", () => {
        expect(EventWrapper.find(".summary")).toHaveLength(1);
    });

    //UI Components - buttons

    test("render the show details button", () => {
        expect(EventWrapper.find(".show-details")).toHaveLength(1);
    });

    test("open details when the show details button is clicked", () => {
        EventWrapper.setState({
            collapsed: true,
        });
        EventWrapper.find(".show-details").simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(false);
    });

    test("hide details when the hide button is clicked", () => {
        EventWrapper.setState({
            collapsed: false,
        });
        EventWrapper.find(".hide-details").simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(true);
    });

    test("When the details button is clicked, the state changed from true to false", () => {
        EventWrapper.setState({
            collapsed: true,
        });
        EventWrapper.find(".details-button").simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(false);
    });

    test("After the details button is clicked, the state changed from false to true", () => {
        EventWrapper.setState({
            collapsed: false,
        });
        EventWrapper.find(".details-button").simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(true);
    });
});