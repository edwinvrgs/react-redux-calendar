import { addMonths, subMonths } from 'date-fns'
import types                    from './types'
import initialState             from '../../../App'

const calendar = (state = {}, action) => {
  const {date} = state
  switch (action.type) {
    case types.CLEAR: {
      return initialState.calendar
    }
    case types.NEXT_MONTH: {
      return {
        ...state,
        date: addMonths(date, 1),
      }
    }
    case types.PREVIOUS_MONTH: {
      return {
        ...state,
        date: subMonths(date, 1),
      }
    }
    default:
      return state
  }
}

export default calendar
