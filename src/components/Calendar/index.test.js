import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';

import Calendar                         from './index';
import configureStore, { initialState } from '../../state/store';

describe('Calendar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    const store = configureStore(initialState);

    ReactDOM.render(
      <Provider store={store}>
        <Calendar />
      </Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should add a reminder', () => {

  });
});
