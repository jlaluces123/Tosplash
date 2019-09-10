import React, { Component } from 'react';

let baseAPIUrl = "https://api.unsplash.com/";

class Search extends Component {
  state = {
    query: "",
    results: [],
  };

  getPictures = () => {
    alert(`You Searched successfully for: ${this.state.query}`);
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    // Handle A User Submitting
    e.preventDefault();
    // Check if the query is not empty and if the length is more than 1 char
    if (this.state.query && this.state.query.length > 1) {
      // If so: make a request to get the data
      this.getPictures();
      // Clear the search bar after
      this.setState({ query: "" });
    } else {
      // If not: alert them that the query is invalid
      alert("Invalid Search Term: Must be more than one character");
    }
  };

  render() {
    return (
      <div className="search">
        <form onSubmit = {this.handleSubmit}>
          <input
            type="search"
            name="query"
            id="query"
            value = {this.state.query}
            onChange = {this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}

export default Search;