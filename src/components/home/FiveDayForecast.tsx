import React from 'react'
import Loader from '@material-ui/core/CircularProgress'
import { useSelector } from 'react-redux'

import Day from './Day'
import { Title, Cards } from '../shared'
import { RootState } from '../../store/reducer/root'

const FiveDayForecast = () => {
	const { currentCity, loading } = useSelector((state: RootState) => state)
	if (loading || !currentCity)
		return (
			<Cards>
				<Loader />
			</Cards>
		)
	const { fiveDayForecast } = currentCity
	return (
		<>
			<Title>Five-day Forecast</Title>
			<Cards>
				{fiveDayForecast?.map((dayProps, i) => (
					<Day key={i.toString()} {...dayProps} />
				))}
			</Cards>
		</>
	)
}

export default FiveDayForecast
