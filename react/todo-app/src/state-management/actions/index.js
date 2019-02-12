import { ADD_TODO } from '../constants';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: text
    }
}