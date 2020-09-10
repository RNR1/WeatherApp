import React from 'react'
import dayjs from 'dayjs'

import CardGrid, { Card } from '../styles/Cards'
import { useSelector } from 'react-redux'
import { RootState } from '../store/root/reducer'
import Title from '../styles/Title'
import { CircularProgress } from '@material-ui/core'

const FiveDayForecast = () => {
	const { currentCity, loading } = useSelector((state: RootState) => state)
	if (loading || !currentCity)
		return (
			<CardGrid>
				<CircularProgress />
			</CardGrid>
		)
	const { fiveDayForecast } = currentCity
	return (
		<>
			<Title>Five-day Forecast</Title>
			<CardGrid>
				{fiveDayForecast?.map(({ date, icon, description, celsius }, i) => (
					<Card key={i.toString()}>
						<p>{dayjs(date).format('ddd')}</p>
						<div>
							<img
								src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}
								alt={description}
							/>
						</div>
						<p>{celsius}&deg; C</p>
					</Card>
				))}
			</CardGrid>
		</>
	)
}

export default FiveDayForecast
