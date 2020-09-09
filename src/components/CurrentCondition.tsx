import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import { RootState, isFavorite } from '../store/root/reducer'
import { toggleFavorite } from '../store/actions/app'

const CurrentCondition = () => {
	const city = useSelector((state: RootState) => state.currentCity)
	const favorites = useSelector((state: RootState) => state.favoriteCities)
	const dispatch = useDispatch()
	const handleFavorite = () => dispatch(toggleFavorite())
	const {
		name,
		currentCondition: { icon, description, celsius }
	} = city!

	return (
		<>
			{city && (
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
							<div>{celsius}&deg; C</div>
						</div>
					</div>
					<div>
						<span>
							{isFavorite(favorites, city) ? (
								<FavoriteIcon onClick={handleFavorite} />
							) : (
								<FavoriteBorderOutlinedIcon onClick={handleFavorite} />
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
