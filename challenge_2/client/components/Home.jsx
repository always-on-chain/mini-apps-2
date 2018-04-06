import React from 'react';
import ReactDOM from 'react-dom';
import F1 from './F1.jsx'

const Home = (props) => (
  <div id="home">
    <button onClick={props.progressCheckout}>Checkout</button>
  </div>
)

export default Home;