import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store.js';

function render(){
  ReactDOM.render(<InsertTopLevelComponent />, document.getElementById('container'));
}
