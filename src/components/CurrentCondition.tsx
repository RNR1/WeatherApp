import React, { useState } from 'react'
import styled from 'styled-components'

import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import { useSelector } from 'react-redux'
import { RootState } from '../store/root/reducer'
import { transformIcon } from '../utils/dataTransform'

const CurrentCondition = () => {
	const city = useSelector((state: RootState) => state.currentCity)
	const [, setFavorite] = useState(false)
	const toggleFavorite = () => setFavorite((prev) => !prev)
	const {
		name,
		isFavorite,
		currentCondition: { icon, description, celsius }
	} = city!
	return (
		<>
			<Container>
				<div className='information'>
					<div className='image'>
						<img
							src={`https://developer.accuweather.com/sites/default/files/${transformIcon(
								icon
							)}-s.png`}
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
						{isFavorite ? (
							<FavoriteBorderOutlinedIcon onClick={toggleFavorite} />
						) : (
							<FavoriteIcon onClick={toggleFavorite} />
						)}
					</span>
				</div>
			</Container>
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
