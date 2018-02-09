import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store';

const store = createStore(reducer);

function render(){
  ReactDOM.render(<InsertTopLevelComponent />, document.getElementById('container'));
}
