import React, { useEffect } from 'react'
import CountrySelect from '../components/CountrySelect'
import CityDetails from '../components/CityDetails'
const Home = () => {
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				console.log('Your current position is:')
				console.log(`Latitude : ${coords.latitude}`)
				console.log(`Longitude: ${coords.longitude}`)
				console.log(`More or less ${coords.accuracy} meters.`)
			},
			(error) => console.log(error)
		)
	}, [])
	return (
		<>
			<CountrySelect />
			<CityDetails />
		</>
	)
}

export default Home
