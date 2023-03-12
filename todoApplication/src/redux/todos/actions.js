/** @format */

import {
  ADD_TODO,
  CLEAR_COMPLETED,
  COLOR_SELECT,
  COMPLETE_ALL_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
} from "./actionTypes";

export const addTodo = (task) => {
  return {
    type: ADD_TODO,
    payload: task,
  };
};
export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    payload: id,
  };
};

export const addColor = (id, color) => {
  return {
    type: COLOR_SELECT,
    payload: {
      id,
      color,
    },
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const completeAllTask = () => {
  return {
    type: COMPLETE_ALL_TASK,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
