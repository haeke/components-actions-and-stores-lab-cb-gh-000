import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props) {
    super(props);
    //bind the context of this so that we can call the store prop
    this.onSubmit = this.onSubmit.bind(this);

  };

  onSubmit(ev) {
    ev.preventDefault();
    console.log('submitted something');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Band label: </label>
          <input />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BandInput;
