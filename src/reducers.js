import { combineReducers } from 'redux';

import {
  NEW_SEARCH,
  START_LOADING,
  END_LOADING,
  RESET,
} from './actions';

function query(state = "", action) {
  switch (action.type) {
    case START_LOADING:
      return action.query;
    default:
      return state;
  }
}

function data(state = [], action) {
  switch (action.type) {
    case END_LOADING:
      if ('error' in action) {
        console.log(action.error);
        return state;
      } else if (action.data.hits.length === 0 && state.length > 0) {
        return [{ noResults: 'No Results' }];
      } else {
        return state.concat(action.data.hits);
      }
    case RESET:
    case NEW_SEARCH:
      return [];
    default:
      return state;
  }
}

function isLoading(state = false, action) {
  switch (action.type) {
    case START_LOADING:
      return true;
    case END_LOADING:
      return false;
    default:
      return state;
  }
}

function pageNumber(state = 1, action) {
  switch (action.type) {
    case END_LOADING:
      if ('error' in action) {
        return state;
      }
      else {
        return state + 1;
      }
    case RESET:
    case NEW_SEARCH:
      return 1;
    default:
      return state;
  }
}

function lastThree(state = [], action) {
  switch (action.type) {
    case START_LOADING:
      return state.concat([action.query]).slice(-3);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  query,
  data,
  isLoading,
  pageNumber,
  lastThree,
});

export default rootReducer;
