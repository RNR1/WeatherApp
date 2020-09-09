import React, { useEffect } from 'react'
import Routes from './routes/Routes'
import Layout from './components/Layout'
import { useDispatch } from 'react-redux'
import { geoPosition } from './store/actions/app'

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				const coords = { lat: latitude.toString(), lon: longitude.toString() }
				dispatch(geoPosition(coords))
			},
			(error) => console.error(error),
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
