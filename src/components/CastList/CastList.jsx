import { fetchGetMovieCreditsById } from 'api';
import { ActorCard } from 'components/CastItem/CastItem';
import { Errors } from 'components/Errors/Errors';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item, List } from './CastList.styled';

export default function MovieCast() {
  const [isLoading, setIsLoading] = useState(false);
  const [actors, setActors] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const response = await fetchGetMovieCreditsById(params.movieId);
        setActors(response.cast);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [params.movieId]);

  return (
    <>
      {actors.length > 0 ? (
        <List>
          {actors.map(actor => (
            <Item key={actor.id}>
              <ActorCard actor={actor} />
            </Item>
          ))}
        </List>
      ) : (
        !isLoading && <Errors>No information about the actors</Errors>
      )}
      {isLoading && <Loader />}
    </>
  );
}