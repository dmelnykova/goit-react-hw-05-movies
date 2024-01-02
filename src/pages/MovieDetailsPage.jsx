import React, { useRef, useState, useEffect, NavLink } from "react";
import { getMoviesDetails } from "../api"; 
import {
    Button,
    MovieInfo,
    StyledLink,
    // SubWrapper,
} from 'components/MovieDetails/MovieDetails.styled';
import { Loader } from "components/Loader/Loader";
import { toast } from "react-hot-toast";
import { Outlet, useParams, useLocation } from 'react-router-dom';


export default function MovieDetailsPage() {
    const [details, setDetails] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { movieId } = useParams();

    const location = useLocation();
    const backLinkRef = useRef(location);

    useEffect(() => {
        const searchDetails = async id => {
            try {
                setIsLoading(true);
                setError(false);
                const data = await getMoviesDetails(id);
                setDetails(data);
            } catch (error) {
                setError(true);
                toast.error('Please, try to reload this page');
            } finally {
                setIsLoading(false);
            }
        };
        searchDetails(movieId);
    }, [movieId]);

    const goBackLink = backLinkRef.current.state?.from ?? '/';

    return (
        <>
            {isLoading && <Loader />}
            {details && (
                <div>
                    <Button to={goBackLink}>Go back</Button>
                    <MovieInfo data={details} />
                </div>
            )}
            {!isLoading && !error && (
                <ul>
                    <li>
                        <StyledLink to={`${goBackLink}/cast`}>
                            <NavLink>Cast</NavLink>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to={`${goBackLink}/reviews`}>
                            <NavLink>Reviews</NavLink>
                        </StyledLink>
                    </li>
                </ul>
            )}
            <Outlet />
        </>
    );
}