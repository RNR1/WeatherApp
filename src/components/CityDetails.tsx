import React from 'react'
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper'

import { RootState } from '../store/root/reducer'
import CurrentCondition from './CurrentCondition'
import FiveDayForecast from './FiveDayForecast'
import Error from './Error'

const CityDetails = () => {
	const { error } = useSelector((state: RootState) => state)
	return (
		<Paper style={{ padding: 20, margin: 10 }} elevation={5} square>
			{error ? (
				<Error />
			) : (
				<>
					<CurrentCondition />
					<FiveDayForecast />
				</>
			)}
		</Paper>
	)
}

export default CityDetails
