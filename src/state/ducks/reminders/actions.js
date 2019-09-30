import { createAction } from 'redux-actions'
import types            from './types'

const clear = createAction(types.CLEAR)
const addReminder = createAction(types.ADD_REMINDER)

export default {
  clear,
  addReminder,
}
