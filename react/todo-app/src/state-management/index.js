import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer);
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('store', JSON.stringify(state));
  console.log(state);
});

export default store;