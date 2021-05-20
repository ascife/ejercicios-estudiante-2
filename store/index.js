import { loadState, saveState } from './localstorage';
import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './reducers';
import thunk from 'redux-thunk';

const persistedState = loadState();

const store = createStore(
  combinedReducers, 
  persistedState,
  applyMiddleware(thunk)
)

store.subscribe(()=> {
  saveState({
    'persistReducer': store.getState().persistReducer
  })
})

export default store;
