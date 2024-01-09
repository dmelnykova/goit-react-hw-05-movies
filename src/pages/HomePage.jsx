import { useState, useEffect } from 'react';
import { getTrendMovies } from "../api"; 
import { ListMovies } from 'components/ListMovies/ListMovies';
import { Loader } from "components/Loader/Loader";
import { toast } from "react-hot-toast";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getTrendMovies(); 
        setMovies(data.results);
      } catch (error) {
        setIsError(true);
        toast.error('Errors! Please try again!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []); 

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 style={{ marginLeft: 60 }}>Trending Today</h1>
          {movies.length > 0 && !isError && <ListMovies data={movies} />}
        </div>
      )}
    </>
  );
}
