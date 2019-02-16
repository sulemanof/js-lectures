import { ACTIONS, VISIBILITY_FILTERS } from '../constants';

export function todos(state = [], action) {
	switch (action.type) {
	case ACTIONS.ADD_TODO:
		return [ ...state, action.payload.todo ];
	case ACTIONS.DELETE_TODO:
		return state.filter(todo => todo.id !== action.payload.id);
	case ACTIONS.TOGGLE_TODO:
		return state.map(todo => {
			if (todo.id !== action.payload.id) {
        return todo;
      }

      return {
        ...todo,
        done: !todo.done
      }
		})
	default:
		return state
	}
}

export function visibilityFilter(state = VISIBILITY_FILTERS.SHOW_ALL, action) {
	switch (action.type) {
		case VISIBILITY_FILTERS.SHOW_ALL:
			return VISIBILITY_FILTERS.SHOW_ALL;
		case VISIBILITY_FILTERS.SHOW_DONE:
			return VISIBILITY_FILTERS.SHOW_DONE
		case VISIBILITY_FILTERS.SHOW_ACTIVE:
			return VISIBILITY_FILTERS.SHOW_ACTIVE;
		default:
			return state
		}
} 
