import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import Routes from './routes/Routes'
import Layout from './components/layout/Layout'
import { geoPosition, search } from './store/actions/app'
import { RootState } from './store/root/reducer'

function App() {
	const dispatch = useDispatch()
	const { pathname } = useLocation()
	const { currentCity } = useSelector((state: RootState) => state)
	useEffect(() => {
		if (pathname === '/' && !currentCity)
			navigator.geolocation.getCurrentPosition(
				({ coords: { latitude, longitude } }) => {
					const coords = { lat: latitude.toString(), lon: longitude.toString() }
					dispatch(geoPosition(coords))
				},
				(_: PositionError) =>
					dispatch(search({ name: 'Tel Aviv', locationKey: '215854' })),
				{ enableHighAccuracy: true }
			)
	}, [dispatch, pathname, currentCity])
	return (
		<Layout>
			<Routes />
		</Layout>
	)
}

export default App
