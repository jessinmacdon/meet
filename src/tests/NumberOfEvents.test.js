import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents/> component", () => {
    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test("render number input", () => {
        expect(NumberOfEventsWrapper.find(".NumberOfEvents")).toHaveLength(1);
    });

    test("renders text input correctly", () => {
        const query = NumberOfEventsWrapper.state("query");
        expect(NumberOfEventsWrapper.find(".number").prop("value")).toBe(query);
    });

    test("change state when text input changes", () => {

        NumberOfEventsWrapper.setState({
            query: 32,
        });

        NumberOfEventsWrapper.find(".number").simulate("change");
        expect(NumberOfEventsWrapper.state("query")).toBe(1);
    });
});