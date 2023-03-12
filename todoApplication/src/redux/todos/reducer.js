/** @format */

import {
  ADD_TODO,
  CLEAR_COMPLETED,
  COLOR_SELECT,
  COMPLETE_ALL_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
} from "./actionTypes";

const initialState = {
  todos: [],
};
const idGenerator = (todos) => {
  const maxId = todos.reduce((maxid, todo) => Math.max(maxid, todo.id), -1);
  return maxId + 1;
};
const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: idGenerator(state.todos),
            text: payload,
            completed: false,
          },
        ],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        todos: state?.todos.map((todo) => {
          if (todo.id === payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        }),
      };
    case COLOR_SELECT:
      return {
        ...state,
        todos: state?.todos.map((todo) => {
          if (todo.id === payload.id) {
            return {
              ...todo,
              color: payload.color,
            };
          }
          return todo;
        }),
      };
    case COMPLETE_ALL_TASK:
      return {
        ...state,
        todos: state?.todos.map((todo) => {
          if (!todo.completed) {
            return {
              ...todo,
              completed: true,
            };
          }
          return todo;
        }),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state?.todos.filter((todo) => !todo.completed),
      };
    case DELETE_TASK:
      return {
        ...state,
        todos: state?.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
