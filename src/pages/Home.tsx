import React, { useEffect } from 'react'
import CityDetails from '../components/CityDetails'
import SearchBar from '../components/SearchBar'

const Home = () => {
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				console.log('Your current position is:')
				console.log(`Latitude : ${coords.latitude}`)
				console.log(`Longitude: ${coords.longitude}`)
				console.log(`More or less ${coords.accuracy} meters.`)
			},
			(error) => console.log(error),
			{ enableHighAccuracy: true }
		)
	}, [])
	return (
		<>
			<SearchBar />
			<CityDetails />
		</>
	)
}

export default Home
