import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/root'
import './index.css'

import * as serviceWorker from './serviceWorker'
const render = () => {
	const App = require('./App').default

	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>,
		document.getElementById('root')
	)
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./App', render)
}

serviceWorker.register()
