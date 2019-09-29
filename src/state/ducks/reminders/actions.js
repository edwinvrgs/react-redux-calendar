import { createAction } from 'redux-actions'
import types            from './types'

const clear = createAction(types.CLEAR)
const nextMonth = createAction(types.NEXT_MONTH)
const previousMonth = createAction(types.PREVIOUS_MONTH)

export default {
  clear,
  nextMonth,
  previousMonth,
}
