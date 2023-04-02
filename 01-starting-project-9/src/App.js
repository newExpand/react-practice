import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch("https://swapi.dev/api/films");
            if (!response.ok) {
                throw new Error("뭔가 단단히 잘못됐음!");
            }
            const data = await response.json();

            const transformedMovies = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                };
            });

            setMovies(transformedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);

        //  fetch("https://swapi.dev/api/films")
        //      .then((response) => {
        //          return response.json();
        //      })
        //      .then((data) => {
        //          const transformedMovies = data.results.map((movieData) => {
        //  return {
        //      id: movieData.episode_id,
        //      title: movieData.title,
        //      openingText: movieData.opening_crawl,
        //      releaseDate: movieData.release_date,
        //  };
        //          });
        //          setMovies(transformedMovies);
        //      });
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    let content = <p>영화를 찾을 수 없습니다.</p>;

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>로딩중...</p>;
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;
