import React from 'react';
import logo from './logo.svg';
import './App.scss';

// https://css-tricks.com/snippets/css/complete-guide-grid/
function App() {
  return (
    <div className="App">
      <div className="container">
        {[...(new Array(15))].map((_, i) => (
          <div className="item">{i+1}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
