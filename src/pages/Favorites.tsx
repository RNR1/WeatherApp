import useSelector from 'store/typedSelector';
import { Cards, Container, Title } from 'components/shared';
import { Favorite, NoFavorites } from 'components/favorites';

const Favorites = () => {
  const favorites = useSelector(state => state.favoriteCities);
  return (
    <Container elevation={5} square>
      <Title>Favorites</Title>
      {favorites.length ? (
        <Cards>
          {favorites?.map(city => (
            <Favorite key={city.locationKey} {...city} />
          ))}
        </Cards>
      ) : (
        <NoFavorites />
      )}
    </Container>
  );
};

export default Favorites;
