import React from 'react'
import dayjs from 'dayjs'

import CardGrid, { Card } from '../styles/Cards'
import { useSelector } from 'react-redux'
import { RootState } from '../store/root/reducer'
import Title from '../styles/Title'
import { transformIcon } from '../utils/dataTransform'

const FiveDayForecast = () => {
	const days = useSelector(
		(state: RootState) => state.currentCity!.fiveDayForecast
	)
	return (
		<>
			<Title>Five-day Forecast</Title>
			<CardGrid>
				{days?.map(({ date, icon, description, celsius }, i) => (
					<Card key={i.toString()}>
						<p>{dayjs(date).format('ddd')}</p>
						<div>
							<img
								src={`https://developer.accuweather.com/sites/default/files/${transformIcon(
									icon
								)}-s.png`}
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
