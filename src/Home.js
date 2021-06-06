import React, { Component } from "react";
import axios from "axios";
import config from "./config";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
    };
  }
  componentDidMount() {
    const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.apiKey}`;
    const singleMovieUrl = "https://api.themoviedb.org/3/movie/";

    axios.get(nowPlayingUrl).then((respone) => {
      //console.log(respone.data);
      const movieData = respone.data.results;
      this.setState({
        movieList: movieData,
      });
    });
  }
  render() {
    console.log(this.state.movieList);
    const imageUrl = "http://image.tmdb.org/t/p/w300";
    const movieGrid = this.state.movieList.map((movie, index) => {
      return <div key={index}>{`${imageUrl}${movie.poster_path}`}</div>;
    });
    return <div>{movieGrid}</div>;
  }
}

export default Home;
