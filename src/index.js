import React from 'react';
import ReactDOM from 'react-dom';

export const createStore = (reducer) => {
  let state;
  let listeners = [];
  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listener.push(listener);
  };

  dispatch({});
  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe,
  };
};

function render(){
  ReactDOM.render(<InsertTopLevelComponent />, document.getElementById('container'));
}
