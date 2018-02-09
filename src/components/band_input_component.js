import React, { Component } from 'react';
import BandIndex from './band_index_component';

class BandInput extends Component {
  constructor(props) {
    super(props);
    //bind the context of this so that we can call the store prop
    this.onSubmit = this.onSubmit.bind(this);

  };

  onSubmit(ev) {
    ev.preventDefault();
    //use the dispatch method with the ADD_BAND action type - we pulled the title from the input form
    this.props.store.dispatch({ type: 'ADD_BAND', payload: { title: event.target.children[1].value }});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Band label: </label>
          <input />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.props.store.getState().map((band, index) => <BandIndex key={index} band={band} />)}
        </ul>
      </div>
    );
  }
}

export default BandInput;
