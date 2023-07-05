import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import './MoviesGrid.css'


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const getTopRateMovies = async (url) => {
    setIsLoading(true);

    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
    setIsLoading(false);
  }

  useEffect(() => {
    const topRateUrl = `${moviesURL}top_rated?${apiKey}`

    getTopRateMovies(topRateUrl)
  }, [])

  const handleLoadMore = () => {
    setDisplayedMovies(displayedMovies + 10);
  };

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 ?
          (isLoading ? (
            <p>Carregando...</p>
          ) : (
            <p>Nenhum filme encontrado.</p>
          )
          ) : (
            topMovies.slice(0, displayedMovies).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          )}
      </div>

      {topMovies.length > displayedMovies && (
        <div className="divBut">
          <button className="buttonP" onClick={handleLoadMore}>
            {isLoading ? "Carregando..." : "Ver Mais"}</button>
        </div>
      )}
    </div>
  )
}

export default Home