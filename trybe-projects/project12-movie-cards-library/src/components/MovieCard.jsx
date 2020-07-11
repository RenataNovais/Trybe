// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" alt={`${title} movie`} src={imagePath} />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <div className="movie-card-rating"><Rating rating={rating} /></div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
