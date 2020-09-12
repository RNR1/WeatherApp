import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Favorite from '@material-ui/icons/Favorite'
import NotFavorite from '@material-ui/icons/FavoriteBorderOutlined'

import { isFavorite } from '../../store/helpers/favorites'
import { toggleFavorite } from '../../store/actions/app'
import { RootState } from '../../store/reducer/app'

const FavoriteIcon = () => {
	const dispatch = useDispatch()
	const { favoriteCities, currentCity } = useSelector(
		(state: RootState) => state
	)

	const handleFavorite = () => dispatch(toggleFavorite())

	return (
		<span>
			{isFavorite(favoriteCities, currentCity!) ? (
				<Favorite
					aria-label='Remove from favorites'
					color='error'
					onClick={handleFavorite}
				/>
			) : (
				<NotFavorite
					aria-label='Add to favorites'
					color='error'
					onClick={handleFavorite}
				/>
			)}
		</span>
	)
}

export default FavoriteIcon
