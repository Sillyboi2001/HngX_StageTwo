import React, { useState, useEffect} from 'react';
import Hero from './Components/Hero/Hero';
import MovieCard from './Components/MovieCard/MovieCard';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const topTen = movies.slice(0, 10)

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=35c7144fd49923e0772252b3464572d0')
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
    <div className='text-container'>
      <Hero />
    </div>
    <div className='category'>
      <h2>TOP 10 MOVIES</h2>
    </div>
    <div className='moviecard-container'>
        <div className='row'>
          <MovieCard movies={topTen}/>
        </div>
    </div>
    <div className='category'>
      <h2>FEATURED MOVIES</h2>
    </div>
    <div className='moviecard-container1'>
        <div className='row1'>
          <MovieCard movies={movies}/>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default App
