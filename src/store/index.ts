import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from 'store/reducer/root';
import rootSaga from 'store/saga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const middlewareEnhancer = applyMiddleware(...middleware);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);
  const store = createStore(reducer, composedEnhancers);

  sagaMiddleware.run(rootSaga);
  return store;
};

const store = configureStore();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducer/root.ts', async () => {
    const newRootReducer = (await import('./reducer/root')).default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;
export default store;
