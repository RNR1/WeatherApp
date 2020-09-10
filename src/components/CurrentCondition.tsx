import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import { RootState } from '../store/root/reducer'
import { isFavorite } from '../store/helpers/favorites'
import { toggleFavorite } from '../store/actions/app'
import TempUnit from './TemperatureUnit'
import { CircularProgress } from '@material-ui/core'

const CurrentCondition = () => {
	const { currentCity, loading } = useSelector((state: RootState) => state)
	const favorites = useSelector((state: RootState) => state.favoriteCities)
	const dispatch = useDispatch()
	const handleFavorite = () => dispatch(toggleFavorite())

	if (loading || !currentCity)
		return (
			<Container>
				<CircularProgress />
			</Container>
		)
	const {
		name,
		currentCondition: { icon, description, celsius, fahrenheit }
	} = currentCity!

	return (
		<>
			{currentCity && (
				<Container>
					<div className='information'>
						<div className='image'>
							<img
								src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}
								alt={description}
							/>
						</div>
						<div>
							<div>{name}</div>
							<TempUnit celsius={celsius} fahrenheit={fahrenheit} />
						</div>
					</div>
					<div>
						<span>
							{isFavorite(favorites, currentCity) ? (
								<FavoriteIcon color='error' onClick={handleFavorite} />
							) : (
								<FavoriteBorderOutlinedIcon
									color='error'
									onClick={handleFavorite}
								/>
							)}
						</span>
					</div>
				</Container>
			)}
			<Description>Scattered Clouds</Description>
		</>
	)
}

export default CurrentCondition

const Container = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 2px solid #eee;
	border-radius: 0.5rem;
	padding: 1rem;

	& .image {
		display: flex;
		align-items: center;
	}

	& .information {
		display: flex;
		align-items: center;
	}
`

const Description = styled.h3`
	text-align: center;
`
