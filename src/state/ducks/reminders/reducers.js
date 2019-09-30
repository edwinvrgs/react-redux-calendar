import types        from './types'
import initialState from '../../../App'

const calendar = (state = {}, action) => {
  const {type, payload} = action
  switch (type) {
    case types.CLEAR: {
      return initialState.reminders
    }
    case types.ADD_REMINDER: {
      return [...state, payload]
    }
    case types.REMOVE_REMINDER: {
      const indexToDelete = state.findIndex((el) => el.id === payload)
      console.log({indexToDelete})
      return [
        ...state.slice(0, indexToDelete),
        ...state.slice(indexToDelete + 1),
      ]
    }
    default:
      return state
  }
}

export default calendar
