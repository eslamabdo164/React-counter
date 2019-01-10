import React, { Component } from 'react';
import './App.css';
import  hand from './hand.svg';
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">

          <div className='main_nav'>
              <img src ={hand} alt='logo' />  <h2>React Counter</h2>
          </div>
      
        <Counter />
      

        </div>
    );
  }
}

export default App;
