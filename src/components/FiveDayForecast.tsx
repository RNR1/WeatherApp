import React from 'react'
import dayjs from 'dayjs'

import CardGrid, { Card } from '../styles/Cards'
import { useSelector } from 'react-redux'
import { RootState } from '../store/root/reducer'
import Title from '../styles/Title'

const FiveDayForecast = () => {
	const days = useSelector(
		(state: RootState) => state.currentCity!.fiveDayForecast
	)
	return (
		<>
			<Title>Five-day Forecast</Title>
			<CardGrid>
				{days?.map((day, i) => (
					<Card key={i.toString()}>
						<p>{dayjs(day.date).add(i, 'day').format('ddd')}</p>
						<div>
							<img
								src={`https://developer.accuweather.com/sites/default/files/0${day.icon}-s.png`}
								alt={day.description}
							/>
						</div>
						<p>{day.celsius}&deg; C</p>
					</Card>
				))}
			</CardGrid>
		</>
	)
}

export default FiveDayForecast
