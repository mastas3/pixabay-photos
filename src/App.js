import React from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { loadState, saveState } from './localStorage';

import Pixabay from './components/Pixabay';
import rootReducer from './reducers';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default function App() {
  return (
    <Provider store={store}>
      <Pixabay />
    </Provider>
  );
}
