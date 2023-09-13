import React from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../Footer/Footer";
import "./moviecard.css";
import { AiOutlineHeart } from 'react-icons/ai'

const MovieCard = (props) => {
    const API_IMG = 'https://image.tmdb.org/t/p/w500';
    const navigate = useNavigate();

    const redirect = (id) => {
      navigate(`/movies/${id}`)
    }
    const toggleFavorite = (e) => {
      const button = e.currentTarget;
  
      button.classList.toggle('favorite');
      if (button.classList.contains('favorite')) {
        button.Color = 'red';
      } else {
        button.Color = 'white';
      }
    }
    
    return (
      <>
        {props.movies.map((movie, index) => (
          <div className="card" data-testid="movie-card" key={index}>
            <div className="img-container">
              <img src={API_IMG + movie.poster_path} className="img-poster" data-testid="movie-poster" onClick={() => redirect(movie.id)}/>
              <button  type="button" className="fav-button" onClick={(e) => toggleFavorite(e)}>
                <AiOutlineHeart />
              </button>
            </div>
            <span className="released" data-testid="movie-release-date">USA, {movie.release_date}</span>
            <p className="mov-title" data-testid="movie-title">{movie.title}</p>
            <p className="rating">{movie.vote_average}</p>
            <span className="genre">Action, Adventure, Horror</span>
        </div>
        ))}
        <div className="ending">
          <Footer />
        </div>
      </>
    )
}

export default MovieCard;
