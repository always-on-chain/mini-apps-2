import React from 'react';
import ReactDOM from 'react-dom';

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.progressCheckout = props.progressCheckout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
    console.log(this.state);
  }

  render() {
    return (
    <div id="f1">
      <form>
        <label>
          Name:
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
        </label><br/>
        <label>
          Email:
          <input type="text" id="email" value={this.state.email} onChange={this.handleChange} />
        </label><br/>
        <label>
          Password:
          <input type="text" id="password" value={this.state.password} onChange={this.handleChange} />
        </label><br/>
      </form>
      <button onClick={this.progressCheckout}>Next</button>
    </div>
    )
  }
}

export default F1;