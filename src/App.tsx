import React, { useEffect } from 'react'
import Routes from './routes/Routes'
import Layout from './components/Layout'
import { useDispatch } from 'react-redux'
import { geoPosition, search } from './store/actions/app'

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				const coords = { lat: latitude.toString(), lon: longitude.toString() }
				dispatch(geoPosition(coords))
			},
			(error) => dispatch(search({ name: 'Tel Aviv', locationKey: '215854' })),
			{ enableHighAccuracy: true }
		)
	}, [dispatch])
	return (
		<Layout>
			<Routes />
		</Layout>
	)
}

export default App
