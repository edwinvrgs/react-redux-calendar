import types from './types'

const calendar = (state = {}, action) => {
  switch (action.type) {
    case types.CLEAR: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}

export default calendar
