import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store';

function render(){
  ReactDOM.render(<InsertTopLevelComponent />, document.getElementById('container'));
}
