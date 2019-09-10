import React, { Component } from 'react';
import axios from "axios";
require('dotenv').config();

// let baseAPIUrl = "https://api.unsplash.com/";
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

class Search extends Component {
  state = {
    query: "",
    results: [],
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.results, this.state.results);
  }

  getPictures = () => {
    axios.get(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_API_ACCESS_KEY}&query=${this.state.query}`)
      .then(photos => {
        this.setState({ results: photos.data });
      })
      .catch(err => console.log(err));
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