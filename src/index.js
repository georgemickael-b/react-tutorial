import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers }  from "redux"
import { counterReducer } from './reducers/counter'
import { todoReducer } from './reducers/todo'
import { Provider } from 'react-redux'

const reducers = combineReducers ({
  "counter" : counterReducer,
  "todos" : todoReducer
})

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('app')
);