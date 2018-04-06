import React from 'react';
import ReactDOM from 'react-dom';

const F3 = (props) => {
  return (
    <div id="f3">
      <form>
        <label>
          Credit Card Number
          <input type="text" name="credit-card" />
        </label><br/>
        <label>
          Experation Date
          <input type="text" name="experation" />
        </label><br/>
        <label>
          CVV
          <input type="text" name="cvv" />
        </label><br/>
        <label>
          Billing Zip Code
          <input type="text" name="zip" />
        </label><br/>
      </form>
      <button onClick={props.progressCheckout}>Next</button>
    </div>
  );
};

export default F3;