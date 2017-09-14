import React, { Component } from 'react';
// import logo from './logo.svg';
//import styling
import './App.css';
//import components
import Pilot from './components/Pilot';
import Planet from './components/Planet';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">

        </div>
        <Pilot/>
        <Planet/>
      </div>
    );
  }
}

export default App;
