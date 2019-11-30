import { combineReducers } from 'redux'

export default combineReducers({
  queue: (s = [], { type, payload }) => {
    if (type !== 'sync_queue') {
      return s
    } else {
      return payload
    }
  },
})
