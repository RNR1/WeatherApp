import React, { useState } from 'react'
import styled from 'styled-components'

import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import { useSelector } from 'react-redux'
import { RootState } from '../store/root/reducer'

const CurrentCondition = () => {
	const city = useSelector((state: RootState) => state.currentCity)
	const [favorite, setFavorite] = useState(false)
	const toggleFavorite = () => setFavorite((prev) => !prev)
	const { currentCondition } = city!
	return (
		<>
			<Container>
				<div className='information'>
					<div className='image'>
						<img
							src={`https://developer.accuweather.com/sites/default/files/0${currentCondition.icon}-s.png`}
							alt={currentCondition.description}
						/>
					</div>
					<div>
						<div>{city?.name}</div>
						<div>{currentCondition.celsius}&deg; C</div>
					</div>
				</div>
				<div>
					<span>
						{favorite ? (
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
