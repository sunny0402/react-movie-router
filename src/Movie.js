import React, { Component } from "react";
import config from "./config";
import axios from "axios";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }
  componentDidMount() {
    // for each movie via the match object we grab the movieId
    const mid = this.props.match.params.movieId;
    const singleMovieUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=${config.apiKey}`;
    axios.get(singleMovieUrl).then((response) => {
      console.log(response.data);
      this.setState({
        movie: response.data,
      });
    });
  }
  render() {
    //   this.props.match.params.movieId
    //console.log(this.props.match);

    // first time through do not have data yet
    // render runs first,then componentDidMount,then state changes, so render runs again
    // so second time through this.state.movie.title will be different

    const movie = this.state.movie;
    const imageUrl = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
    if (this.state.movie.title === undefined) {
      <h1>Loading...</h1>;
    }
    return (
      <div>
        <img src={imageUrl} />
        <p>{movie.title}</p>
        <p>Budget: {movie.budget}</p>
        <p>Tagline: {movie.tagline}</p>
        <p>Overview: {movie.overview}</p>
      </div>
    );
  }
}
export default Movie;
