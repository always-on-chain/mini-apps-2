import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['hi']
    };
  }

  fetch() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000',
      contentType: 'application/json',
      success: (data) => {
        console.log('Success: here is the data: ', this.state.data);
      },
      error: (err) => {
        console.log('Error: ', error)
      }
    })
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return <p>Crypto Currency Tracker</p>;
  }
}

render(<App />, document.getElementById('app'));
