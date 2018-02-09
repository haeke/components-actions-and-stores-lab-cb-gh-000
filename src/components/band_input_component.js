import React, { Component } from 'react'

class BandInput extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Band label: </label>
          <input />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BandInput;
