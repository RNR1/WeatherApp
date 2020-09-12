import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tooltip from '@material-ui/core/Tooltip'
import Favorite from '@material-ui/icons/Favorite'
import NotFavorite from '@material-ui/icons/FavoriteBorderOutlined'

import { isFavorite } from '../../store/helpers/favorites'
import { toggleFavorite } from '../../store/actions/app'
import { RootState } from '../../store/reducer/app'

interface Props {
	title?: string
	onClick: () => void
}

const RemoveFromFavorites: FC<Props> = ({
	onClick,
	title = 'Remove from favorites'
}) => (
	<Tooltip title={title}>
		<Favorite aria-label={title} color='error' onClick={onClick} />
	</Tooltip>
)

const AddToFavorites: FC<Props> = ({ onClick, title = 'Add to favorites' }) => (
	<Tooltip title={title}>
		<NotFavorite aria-label={title} color='error' onClick={onClick} />
	</Tooltip>
)

const FavoriteIcon = () => {
	const dispatch = useDispatch()
	const handleFavorite = () => dispatch(toggleFavorite())

	const { favoriteCities, currentCity } = useSelector(
		(state: RootState) => state
	)

	return isFavorite(favoriteCities, currentCity!) ? (
		<RemoveFromFavorites onClick={handleFavorite} />
	) : (
		<AddToFavorites onClick={handleFavorite} />
	)
}

export default FavoriteIcon
