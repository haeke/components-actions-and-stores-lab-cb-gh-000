import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store';
import bandReducer from './reducers/band_reducer';
import BandInput from './componentss/band_input_component';

const store = createStore(bandReducer);

function render(){
  ReactDOM.render(<BandInput />, document.getElementById('container'));
}
