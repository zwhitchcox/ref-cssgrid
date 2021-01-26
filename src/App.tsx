import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Form from './Form';
import HomeAddressForm from './HomeAddressForm'
import MuiInput from './MuiInput';
import MuiForm from './MuiForm';

// https://css-tricks.com/snippets/css/complete-guide-grid/
function App() {
  return (
    <div className="App">
      {/* <div className="container">
        {[...(new Array(15))].map((_, i) => (
          <div className="item">{i+1}</div>
        ))}
      </div> */}
      {/* <HomeAddressForm /> */}
      <MuiForm />
      {/* <MuiInput /> */}
    </div>
  );
}

export default App;
