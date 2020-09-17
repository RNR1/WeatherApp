import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Routes from './routes/Routes'
import Layout from './components/layout/Layout'
import { search } from './store/actions/app'
import { DEFAULT_CITY, DEFAULT_LOCATION_KEY } from './config/consts'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(search({ name: DEFAULT_CITY, locationKey: DEFAULT_LOCATION_KEY }))
	}, [dispatch])

	return (
		<Layout>
			<Routes />
		</Layout>
	)
}

export default App
