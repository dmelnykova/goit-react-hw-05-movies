import { getMovieAbout } from 'api';
import { Loader } from 'components/Loader/Loader';
import { ReviewsCard } from 'components/ReviewsCard/ReviewsCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item, List, Error} from './Reviews.styled';

export default function MovieReviews() {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieAbout(params.movieId);
        setReviews(response.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [params.movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(review => (
            <Item key={review.id}>
              <ReviewsCard review={review} />
            </Item>
          ))}
        </List>
      ) : (
        !isLoading && <Error> There are no reviews </Error>
      )}
      {isLoading && <Loader />}
    </>
  );
}