import React from 'react'
import Paper from '@material-ui/core/Paper'

import CurrentCondition from './CurrentCondition'
import FiveDayForecast from './FiveDayForecast'

const CityDetails = () => {
	return (
		<Paper style={{ padding: 20, margin: 10 }} elevation={5} square>
			<CurrentCondition />
			<FiveDayForecast />
		</Paper>
	)
}

export default CityDetails
