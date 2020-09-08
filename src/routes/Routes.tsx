import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = lazy(async () => import('../pages/Home'))
const Favorites = lazy(async () => import('../pages/Favorites'))

const Routes = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<Switch>
			<Route exact to='/' component={Home} />
			<Route exact to='/favorites' component={Favorites} />
		</Switch>
	</Suspense>
)

export default Routes
