import React, { useState } from 'react'
import styled from 'styled-components'

import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'

const CurrentCondition = () => {
	const [favorite, setFavorite] = useState(false)
	const toggleFavorite = () => setFavorite((prev) => !prev)
	return (
		<>
			<Container>
				<div className='information'>
					<div className='image'>
						<img
							src='https://developer.accuweather.com/sites/default/files/01-s.png'
							alt='Sunny'
						/>
					</div>
					<div>
						<div>Tel Aviv</div>
						<div>38&deg; C</div>
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
					<span></span>
				</div>
			</Container>
			<WeatherDescription>Scattered Clouds</WeatherDescription>
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

const WeatherDescription = styled.h2`
	text-align: center;
`
