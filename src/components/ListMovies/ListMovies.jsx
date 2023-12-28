import { useLocation } from 'react-router-dom';
import { Img, List, Item, Title, StyledLink, } from './ListMovies.styled'

export const ListMovies = ({ data }) => {
    const location = useLocation();
    return (
        <>
            <List>
                {data.map(({ id, title, poster_path }) => (
                <Item key={id}>
                    <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                        <Img
                            src={
                                poster_path
                                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                    : 'https://astatic.ccmbg.com/ccmcms_linternaute/dist/public/public-assets/img/default/cine-defaut-1.jpg'
                            }
                            alt=""
                            width={250}
                        />
                        <Title>{title}</Title>
                    </StyledLink>
                </Item>
            ))}

            </List>
        </>
    )
}