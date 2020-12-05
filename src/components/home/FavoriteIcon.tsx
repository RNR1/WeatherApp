import { useDispatch } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import Favorite from '@material-ui/icons/Favorite';
import NotFavorite from '@material-ui/icons/FavoriteBorderOutlined';
import { isFavorite } from 'utils/favorites';
import { toggleFavorite } from 'store/actions/session.actions';
import { useSelector } from 'store/reducer';
import { CLICKABLE } from 'config/consts';

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
  const dispatch = useDispatch();
  const handleFavorite = () => dispatch(toggleFavorite());

  const { favoriteCities } = useSelector(({ session }) => session);
  const { currentCity } = useSelector(({ search }) => search);

  return isFavorite(favoriteCities, currentCity!) ? (
    <RemoveFromFavorites onClick={handleFavorite} />
  ) : (
    <AddToFavorites onClick={handleFavorite} />
  );
};

export default FavoriteIcon;
