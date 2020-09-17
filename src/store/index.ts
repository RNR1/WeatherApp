import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/root'
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
	module.hot.accept('./reducer/root.ts', () => {
		const newRootReducer = require('./reducer/root.ts').default
		store.replaceReducer(newRootReducer)
	})
}

export type AppDispatch = typeof store.dispatch
export default store
