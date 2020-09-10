import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const Home = lazy(async () => await import('../pages/Home'))
const Favorites = lazy(async () => await import('../pages/Favorites'))

const Routes = () => (
	<Suspense fallback={<CircularProgress />}>
		<Switch>
			<Route path='/favorites' component={Favorites} />
			<Route path='/' component={Home} />
		</Switch>
	</Suspense>
)

export default Routes
