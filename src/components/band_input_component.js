import React, { Component } from 'react'

class BandInput extends Component {
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
