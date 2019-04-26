import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "vnC1SNKGIeopyKiELHnGYDZmGa7KvZFj";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  state = { reviews: [] };

  updateData = () => {
    fetch(URL)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        // console.log(data.results);
        this.setState({ reviews: data.results });
      });
  };

  componentDidMount() {
    this.updateData();
  }

  render() {
    return (
      <div on className="latest-movie-reviews">
        {this.state.reviews.map(review => {
          return <MovieReviews {...review} />;
        })}
      </div>
    );
  }
}
