import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const Home = lazy(async () => await import('../pages/Home'))
const Favorites = lazy(async () => await import('../pages/Favorites'))
const NotFound = lazy(async () => await import('../pages/NotFound'))

const Routes = () => (
	<Suspense fallback={<CircularProgress />}>
		<Switch>
			<Route path='/favorites' component={Favorites} />
			<Route exact path='/' component={Home} />
			<Route path='/404' component={NotFound} />
			<Redirect to='/404' />
		</Switch>
	</Suspense>
)

export default Routes
