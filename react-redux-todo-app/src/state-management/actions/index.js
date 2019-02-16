import { ACTIONS, VISIBILITY_FILTERS } from '../constants';

let todoCounter = 0;

export const addTodo = ({ text }) => {
  todoCounter += 1;
  return ({
    type: ACTIONS.ADD_TODO,
    payload: {
      todo: {
        text,
        id: todoCounter
      }
    }
  })
};  

export const deleteTodo = ({ id }) => ({
  type: ACTIONS.DELETE_TODO,
  payload: {
    id
  }
});

export const toggleTodo = ({ id }) => ({
  type: ACTIONS.TOGGLE_TODO,
  payload: {
    id
  }
})

export const showAll = () => ({
  type: VISIBILITY_FILTERS.SHOW_ALL
});

export const showDone = () => ({
  type: VISIBILITY_FILTERS.SHOW_DONE
});

export const showActive = () => ({
  type: VISIBILITY_FILTERS.SHOW_ACTIVE
});
