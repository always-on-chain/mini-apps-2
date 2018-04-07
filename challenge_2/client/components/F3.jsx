import React from 'react';
import ReactDOM from 'react-dom';

class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: '',
      expiration: '',
      cvv: '',
      zip: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.progressCheckout = props.progressCheckout.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value 
    })
  }

  render() {
    return (
      <div id="f3">
        <form>
          <label>
            Credit Card Number
            <input type="text" id="credit" value={this.state.credit} onChange={this.handleChange} />
          </label><br/>
          <label>
            Expiration Date
            <input type="text" id="expiration" value={this.state.credit} onChange={this.handleChange} />
          </label><br/>
          <label>
            CVV
            <input type="text" id="cvv" value={this.state.credit} onChange={this.handleChange} />
          </label><br/>
          <label>
            Billing Zip Code
            <input type="text" id="zip" value={this.state.credit} onChange={this.handleChange} />
          </label><br/>
        </form>
        <button onClick={this.progressCheckout}>Next</button>
      </div>
    );
  }
};

export default F3;