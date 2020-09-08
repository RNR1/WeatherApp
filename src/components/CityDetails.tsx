import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import dayjs from 'dayjs'
import styled from 'styled-components'

import fiveDays from '../data/FiveDayForecast.json'

const CityDetails = () => {
	const [favorite, setFavorite] = useState(false)
	const toggleFavorite = () => setFavorite((prev) => !prev)
	return (
		<Paper style={{ padding: 20 }} elevation={5} square>
			<CurrentCondition>
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
			</CurrentCondition>
			<WeatherText>Scattered Clouds</WeatherText>
			<FiveDayForecast>
				{fiveDays.DailyForecasts.map((day) => (
					<ForecastCard>
						<p>{dayjs(day.Date).format('ddd')}</p>
						<p>{day.Temperature.Minimum.Value}&deg; C</p>
					</ForecastCard>
				))}
			</FiveDayForecast>
		</Paper>
	)
}

export default CityDetails

const CurrentCondition = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 2px solid #eee;
	border-radius: 0.5rem;

	& .image {
		display: flex;
		align-items: center;
	}

	& .information {
		display: flex;
		align-items: center;
	}
`
const WeatherText = styled.h2`
	text-align: center;
`

const FiveDayForecast = styled.section`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`

const ForecastCard = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 12rem;
	width: 9rem;
	border: 3px solid #eee;
	box-shadow: 2px 2px 2px #eee;
	margin: 10px;
`
