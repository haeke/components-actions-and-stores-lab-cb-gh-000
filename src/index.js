import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store';

import bandReducer from './reducers/band_reducer';
import BandInput from './components/band_input_component';

const store = createStore(bandReducer);

//A component will need to re-render when state is changed to display new information. We need to wrap the ReactDOM.render() in a renderApp function that we pushed to our listners array called each time dispatch is called. We will need this functionality so that whenever a new band is added to state our whole application re-renders so that our band_index_component shows the updated bands.

const renderApp = () => {
  ReactDOM.render(<BandInput store={store}/>, document.getElementById('container'));
};
//this will update state when it is changed
store.subscribe(renderApp);
store.dispatch({});
