import React from 'react'
import { useSelector } from 'react-redux'

import { Container } from '../components/shared'
import {
	CurrentCondition,
	FiveDayForecast,
	Error,
	SearchBar
} from '../components/home'
import { RootState } from '../store/reducer/app'

const Home = () => {
	const { error } = useSelector((state: RootState) => state)
	if (error) return <Error message={error} />
	return (
		<>
			<SearchBar />
			<Container elevation={5} square>
				<CurrentCondition />
				<FiveDayForecast />
			</Container>
		</>
	)
}

export default Home
