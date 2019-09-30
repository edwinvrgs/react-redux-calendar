import { addMonths, subMonths } from 'date-fns'
import types                    from './types'
import initialState             from '../../../App'

const calendar = (state = {}, action) => {
  const {type, payload} = action
  switch (type) {
    case types.CLEAR: {
      return initialState.reminder
    }
    case types.ADD_REMINDER: {
      return [...state, payload]
    }
    default:
      return state
  }
}

export default calendar
