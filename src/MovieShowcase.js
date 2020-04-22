import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movie, i) => {
      const {title, IMDBRating, genres, poster} = movie;
      return (<MovieCard key={i} title={title} IMDBRating={IMDBRating} genres={genres} poster={poster} />);
    });
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
