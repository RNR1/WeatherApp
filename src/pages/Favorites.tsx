import { Cards, Container, Title } from 'components/shared';
import { Favorite, NoFavorites } from 'components/favorites';
import { useSelector } from 'store/reducer';

const Favorites = () => {
  const favorites = useSelector(({ session }) => session.favoriteCities);
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
