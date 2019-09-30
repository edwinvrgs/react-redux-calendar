import React    from 'react';
import ReactDOM from 'react-dom';

import App                from './App';
import * as serviceWorker from './serviceWorker';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
