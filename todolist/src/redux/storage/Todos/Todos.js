import { getThisWeek } from 'utils';

/* action types -------------------------------------------------------------------------- */

const ADD_TODO = 'Add todo';
const REMOVE_TODO = 'Remove todo';
const EDIT_TODO = 'Edit todo';
const READ_ALL_TODOS = 'read all todos';
const CHECK_TODO = 'Check todo';

/* acttion creators -------------------------------------------------------------------------- */

export const readTodoAction = () => ({
  type: READ_ALL_TODOS,
});

export const addTodoAction = (date, newTodo) => ({
  type: ADD_TODO,
  payload: {
    date,
    newTodo,
  }
});

export const editTodoAction = (date, willEditTodo) => ({
  type: EDIT_TODO,
  payload: {
    date,
    willEditTodo,
  },
});

export const removeTodoAction = (date, willRemoveTodo) => ({
  type: REMOVE_TODO,
  payload: {
    date,
    willRemoveTodo
  }
});

export const checkTodoAction = (date, checkTodo) => ({
  type: CHECK_TODO,
  payload: {
    date,
    checkTodo
  }
})

/* initial state + reducer -------------------------------------------------------------------------- */

const initialState = {};

getThisWeek().forEach((day) => {
  initialState[day] = [];
});

export const todoListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
    case READ_ALL_TODOS:
      return state;

    case ADD_TODO:
      return { ...state, [payload.date]: [...state[payload.date], payload.newTodo] };

    case EDIT_TODO:
      return {
        ...state,
        [payload.date]: state[payload.date].map((todo) =>
          todo.id === payload.willEditTodo.id ? payload.willEditTodo : todo
        ),
      };

    case REMOVE_TODO:
      return {
        ...state,
        [payload.date] : state[payload.date].filter(todo => todo.id !== payload.willRemoveTodo.id),
      };
    
    case CHECK_TODO:
      return {
        ...state,
        [payload.date] : state[payload.date].map(todo => todo.id === payload.checkTodo.id ? {...todo, ...payload.checkTodo } : todo)
      }
  }
};
