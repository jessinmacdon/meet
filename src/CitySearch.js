import React, { Component } from 'react';

class CitySearch extends Component {
    state = {
        query: "",
        suggestions: [],
        showSuggestions: undefined,
    };

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };
  
   /* handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ showSuggestions: true });
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                suggestions,
            });
        } else {
            return this.setState({
                query: value,
                suggestions,
            });
        }
    };*/

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false,
        });
        this.props.updateEvents(suggestion, 0);
    };

    render() {
        return (
            <div className="CitySearch">
                <br />
                <p>Select a City:</p>
                <br />
                <input
                    type="text"
                    className="city"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                    onFocus={() => {this.setState({ showSuggestions: true });
                    }}
                />
                <ul
                    className="suggestions"
                    style={this.state.showSuggestions ? {} : { display: "none" }}
                >
                    {this.state.suggestions.map((suggestion) => (
                        <li
                            key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                    <li onClick={() => this.handleItemClicked("all")}>
                        <b>See all cities</b>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CitySearch;