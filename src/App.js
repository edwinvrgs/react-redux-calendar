import React          from 'react'
import { Provider }   from 'react-redux'
import { Calendar }   from './components'
import configureStore from './state/store'

export const initialState = {
  calendar: {
    date: new Date(),
    selectedDay: new Date(),
  },
  reminders: [{}],
}

function App () {
  const store = configureStore(initialState)

  return (
    <Provider store={ store }>
      <div className="App">
        <Calendar />
      </div>
    </Provider>
  )
}

export default App


