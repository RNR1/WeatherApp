import React, { useEffect } from 'react'
import Routes from './routes/Routes'
import Layout from './components/Layout'
import { useDispatch } from 'react-redux'
import { geoPosition, search } from './store/actions/app'
import { useLocation } from 'react-router-dom'

function App() {
	const dispatch = useDispatch()
	const { pathname } = useLocation()
	useEffect(() => {
		if (pathname === '/')
			navigator.geolocation.getCurrentPosition(
				({ coords: { latitude, longitude } }) => {
					const coords = { lat: latitude.toString(), lon: longitude.toString() }
					dispatch(geoPosition(coords))
				},
				(error) =>
					dispatch(search({ name: 'Tel Aviv', locationKey: '215854' })),
				{ enableHighAccuracy: true }
			)
	}, [dispatch, pathname])
	return (
		<Layout>
			<Routes />
		</Layout>
	)
}

export default App
