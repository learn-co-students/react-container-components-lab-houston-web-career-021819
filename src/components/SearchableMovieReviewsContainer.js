import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'IYf02t5mpAwUPmztiG27OpwZ7O53VIk2';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: "",
    reviews: []
  }

  handleChange = (e) => {
    e.persist()
    this.setState({ searchTerm: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.value}&api-key=IYf02t5mpAwUPmztiG27OpwZ7O53VIk2`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        reviews: data.results
      })
    })
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({
        reviews: data.results
      })
    })
  }

  render() {
    return (
      <div className = "searchable-movie-reviews">
        <h1> Searchable Movie Reviews: </h1>
        <form onSubmit={this.handleSubmit} >
          <input onChange={this.handleChange} value={this.state.searchTerm}></input>
        </form>
        {this.state.reviews.map(mov => <MovieReviews {...mov} />)}
      </div>
    )
  }
}
