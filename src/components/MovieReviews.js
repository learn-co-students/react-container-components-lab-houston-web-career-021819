// Code MovieReviews Here
import React, { Component } from "react";

const MovieReviews = props => {
  console.log(props);
  console.log(props.display_title);
  return (
    <div>
      <h4>{props.headline}</h4>
      <h6>{props.byline}</h6>
      <p>{props.summary_short}</p>
      <br />
    </div>
  );
};
export default MovieReviews;
