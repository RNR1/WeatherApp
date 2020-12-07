import Tooltip from '@material-ui/core/Tooltip';
import Favorite from '@material-ui/icons/Favorite';
import NotFavorite from '@material-ui/icons/FavoriteBorderOutlined';
import { isFavorite } from 'utils/favorites';
import { CLICKABLE } from 'config/consts';
import { useSearch, useSession } from 'hooks';

interface Props {
  title?: string;
  onClick: () => void;
}

const RemoveFromFavorites: React.FC<Props> = ({
  onClick,
  title = 'Remove from favorites',
}) => (
  <Tooltip title={title}>
    <Favorite
      style={CLICKABLE}
      aria-label={title}
      color="error"
      onClick={onClick}
    />
  </Tooltip>
);

const AddToFavorites: React.FC<Props> = ({
  onClick,
  title = 'Add to favorites',
}) => (
  <Tooltip title={title}>
    <NotFavorite
      style={CLICKABLE}
      aria-label={title}
      color="error"
      onClick={onClick}
    />
  </Tooltip>
);

const FavoriteIcon = () => {
  const { favoriteCities, toggleFavorite } = useSession();
  const { currentCity } = useSearch();

  return isFavorite(favoriteCities, currentCity!) ? (
    <RemoveFromFavorites onClick={toggleFavorite} />
  ) : (
    <AddToFavorites onClick={toggleFavorite} />
  );
};

export default FavoriteIcon;
