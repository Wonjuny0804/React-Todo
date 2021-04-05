import { combineReducers } from 'redux'
import { todoListReducer } from './Todos/Todos'


/* root reducer -------------------------------------------------------------------------- */

const rootReducer = combineReducers({
  todo: todoListReducer,
})

export default rootReducer