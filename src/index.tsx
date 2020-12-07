import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import * as serviceWorker from './serviceWorker';

const render = async () => {
  const App = (await import('./App')).default;

  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </StrictMode>,
    document.getElementById('root')
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', render);
}

serviceWorker.register();
