import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "vnC1SNKGIeopyKiELHnGYDZmGa7KvZFj";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = { reviews: "", searchTerm: "" };
  render() {
    return (
      <div className="searchable-movie-reviews">
        I'm the SearchableMovieReviewsContainer.
      </div>
    );
  }
}
