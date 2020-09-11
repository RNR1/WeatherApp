import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/app'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware()
	const middleware = [sagaMiddleware]

	const middlewareEnhancer = applyMiddleware(...middleware)
	const composedEnhancers = composeWithDevTools(middlewareEnhancer)
	const store = createStore(reducer, composedEnhancers)

	sagaMiddleware.run(rootSaga)
	return store
}

const store = configureStore()

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./reducer/app.ts', () => {
		const newRootReducer = require('./reducer/app').default
		store.replaceReducer(newRootReducer)
	})
}

export type AppDispatch = typeof store.dispatch
export default store
