import { Cards, Container, Title } from 'components/shared';
import { Favorite, NoFavorites } from 'components/favorites';
import { useSession } from 'hooks';

const Favorites = () => {
  const { favoriteCities: favorites } = useSession();
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
