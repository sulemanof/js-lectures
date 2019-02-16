import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter } from './reducers';

const rootReducer = combineReducers({
	todos,
	visibilityFilter
})

const store = createStore(rootReducer);

export default store;