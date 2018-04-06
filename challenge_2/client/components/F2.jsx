import React from 'react';
import ReactDOM from 'react-dom';

const F2 = (props) => {
  return (
    <div id="f2">
      <form>
        <label>
          Address: 
          <input type="text" name="address" />
        </label><br/>
        <label>
          Apt: 
          <input type="text" name="apt" />
        </label><br/>
        <label>
          City: 
          <input type="text" name="city" />
        </label><br/>
        <label>
          State: 
          <input type="text" name="state" />
        </label><br/>
        <label>
          Zipcode: 
          <input type="text" name="zip-code" />
        </label><br/>
        <label>
          Phone: 
          <input type="text" name="phone" />
        </label><br/>
      </form>
      <button onClick={props.progressCheckout}>Next</button>
    </div>
  )
}

export default F2;