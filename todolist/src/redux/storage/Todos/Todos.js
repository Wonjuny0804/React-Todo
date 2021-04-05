import { getThisWeek } from 'utils'

/* action types -------------------------------------------------------------------------- */

const ADD_TODO = 'Add todo';
const REMOVE_TODO = 'Remove todo';
const EDIT_TODO = 'Edit todo';
const READ_ALL_TODOS = 'read all todos';

/* acttion creators -------------------------------------------------------------------------- */

export const readTodoAction = () => ({
  type: READ_ALL_TODOS,
});

export const addTodoAction = newTodo => ({
  type: ADD_TODO,
  payload: newTodo
});

export const editTodoAction = (date, willEditTodo) => ({
  type: EDIT_TODO,
  payload: {
    date,
    willEditTodo
  }
});

export const removeTodoAction = willRemoveTodo => ({
  type: REMOVE_TODO,
  payload: willRemoveTodo
});


/* initial state + reducer -------------------------------------------------------------------------- */


const initialState = {}

getThisWeek.forEach(day => {
  initialState[day] = [];
});

export const todoListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
    case READ_ALL_TODOS:
      return state;
    
    case ADD_TODO:
      return payload;
    
    case EDIT_TODO:     
      return {...state, date: state[payload.date].map(todo => todo.id === payload.willEditTodo.id ? payload.willEditTodo : todo)};
    
    case REMOVE_TODO:
      return {...state , date: state[payload.date].filter(todo => todo.id !== payload.id)};
  }
}