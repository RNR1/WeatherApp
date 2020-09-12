import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Routes from './routes/Routes'
import Layout from './components/layout/Layout'
import { search } from './store/actions/app'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(search({ name: 'Tel Aviv', locationKey: '215854' }))
	}, [dispatch])

	return (
		<Layout>
			<Routes />
		</Layout>
	)
}

export default App
