import React        from 'react';
import { Provider } from 'react-redux';

import { Calendar }   from './components';
import configureStore from './state/store';

import 'bulma/bulma.sass';

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <div className="App">
        <Calendar />
      </div>
    </Provider>
  );
}

export default App;
