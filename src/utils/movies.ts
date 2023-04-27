import { IncomingMovie, Movie } from "../mocks/mockMovies";

/**
 * Transform a movie object from the TMDB API into an object useable in the UI
 * @param movie Incoming movie data from TMDB API
 * @returns A transformed movie object with the correct shape for the UI
 */
export const transformMovie = (movie: IncomingMovie): Movie => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const movieUrl = "https://www.themoviedb.org/movie";

  const transformedMovie: Movie = {
    image: `${imageUrl}${movie.backdrop_path}`,
    title: movie.title,
    description: movie.overview,
    releaseDate: movie.release_date,
    movieUrl: `${movieUrl}/${movie.id}`,
  };

  return transformedMovie;
};

/**
 * URL used to fetch all upcoming movies
 */
export const fetchUpcomingMovieUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB}&language=en-US&page=1`;
