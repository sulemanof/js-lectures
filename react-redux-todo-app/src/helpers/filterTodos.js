import { VISIBILITY_FILTERS } from "../state-management/constants";

export default function filterTodos(todos, visibilityFilter) {
	switch (visibilityFilter) {
		case VISIBILITY_FILTERS.SHOW_DONE:
			return todos.filter(todo => todo.done);
		case VISIBILITY_FILTERS.SHOW_ACTIVE:
			return todos.filter(todo => !todo.done);
		default:
			return todos;
	}
}