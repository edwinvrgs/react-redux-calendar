import { createAction } from 'redux-actions'
import types            from './types'

const clear = createAction(types.CLEAR)

export default {
  clear,
}
