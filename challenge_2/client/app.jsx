import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Home from './components/Home.jsx'
import F1 from './components/F1.jsx'
import F2 from './components/F2.jsx'
import F3 from './components/F3.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      f1: false,
      f2: false,
      f3: false,
      confirmation: false
    }

    this.progressCheckout = this.progressCheckout.bind(this);
  }

    // fetch() {
  //   axios.get('http://localhost:3000/')
  //   .then((response) => {
  //     console.log('axios ', response);

  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }

  // componentWillMount() {
  //   this.fetch();
  // }

  post() {
    axios.post('http://localhost:3000/')
    .then((response) => {
      console.log('post ', response)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  progressCheckout() {
    if (this.state.home) {
      this.setState({
        home: !this.state.home,
        f1: !this.state.f1
      })
    } else if (this.state.f1) {
      this.setState({
        f1: !this.state.f1,
        f2: !this.state.f2,
      })
    } else if (this.state.f2) {
      this.setState({
        f2: !this.state.f2,
        f3: !this.state.f3,
      })
    } else if (this.state.f3) {
      this.setState({
        f2: !this.state.f3,
        f3: !this.state.f3,
      })
    } else {
      this.setState({
        f3: !this.state.f3,
        confirmation: !this.state.confirmation
      })
    }
  }

  render() {
    if (this.state.home) {
      return <Home progressCheckout={this.progressCheckout} />
    } else if (this.state.f1) {
      return <F1 progressCheckout={this.progressCheckout} />
    } else if (this.state.f2) {
      return <F2 progressCheckout={this.progressCheckout} />
    } else {
      return <F3 progressCheckout={this.progressCheckout} />
    }
  }
}

// export default App;

ReactDOM.render(<App />, document.getElementById('app'));



  // fetch() {
  //   axios.get('http://localhost:3000/')
  //   .then((response) => {
  //     console.log('axios ', response);

  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }

  // componentWillMount() {
  //   this.fetch();
  // }