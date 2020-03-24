import { searchTags } from './services/pixabay';

export const NEW_SEARCH = 'NEW_SEARCH'
export const RESET = 'RESET'
export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export function reset() {
  return { type: RESET };
}

export function newSearch(query, pageNumber) {
  return dispatch => {
    dispatch({ type: NEW_SEARCH });
    return doRequest(dispatch, query, pageNumber);
  };
}

export function startLoad(query) {
  return { type: START_LOADING, query };
}

export function fetchData(query, pageNumber) {
  return dispatch => {
    return doRequest(dispatch, query, pageNumber);
  };
}

function doRequest(dispatch, query, pageNumber) {
  dispatch(startLoad(query));
  return searchTags({query, pageNumber})
    .then(response => response.json())
    .then(json => dispatch(endLoad(json)))
    .catch(error => dispatch(errorLoad(error)));
}

function errorLoad(error) {
  return { type: END_LOADING, error };
}

function endLoad(data) {
  return { type: END_LOADING, data };
}
