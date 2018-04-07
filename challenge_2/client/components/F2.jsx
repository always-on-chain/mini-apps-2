import React from 'react';
import ReactDOM from 'react-dom';

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      apt: '',
      city: '',
      state: '',
      zipcode: '',
      phone: ''
    }

    this.progressCheckout = props.progressCheckout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div id="f2">
        <form>
          <label>
            Address: 
            <input type="text" id="address" value={this.state.address} onChange={this.handleChange} />
          </label><br/>
          <label>
            Apt: 
            <input type="text" id="apt" value={this.state.apt} onChange={this.handleChange} />
          </label><br/>
          <label>
            City: 
            <input type="text" id="city" value={this.state.city} onChange={this.handleChange} />
          </label><br/>
          <label>
            State: 
            <input type="text" id="state" value={this.state.state} onChange={this.handleChange} />
          </label><br/>
          <label>
            Zipcode: 
            <input type="text" id="zipcode" value={this.state.zipcode} onChange={this.handleChange} />
          </label><br/>
          <label>
            Phone: 
            <input type="text" id="phone" value={this.state.phone} onChange={this.handleChange} />
          </label><br/>
        </form>
        <button onClick={this.progressCheckout}>Next</button>
      </div>
    )
  }
  
}

export default F2;