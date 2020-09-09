import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

import fiveDays from '../data/FiveDayForecast.json'

const FiveDayForecast = () => {
	return (
		<CardGrid>
			{fiveDays.DailyForecasts.map((day) => (
				<ForecastCard key={day.EpochDate}>
					<p>{dayjs(day.Date).format('ddd')}</p>
					<p>{day.Temperature.Minimum.Value}&deg; C</p>
				</ForecastCard>
			))}
		</CardGrid>
	)
}

export default FiveDayForecast

const CardGrid = styled.section`
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
