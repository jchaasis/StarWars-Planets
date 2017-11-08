import React, { Component } from 'react';
// import logo from './logo.svg';
//import styling
import './App.css';

//import redux goodies
import { connect } from 'react-redux';

//import actions
import { dispPlanets } from './actions'

//import components
import Pilot from './components/Pilot';
import PlanetMap from './components/PlanetMap';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
    };
  }

  componentDidMount() {
  //get the planet data to then store in redux
  this.props.fetchPlanets()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">

        </div>
        <Pilot/>
        <PlanetMap/>
      </div>
    );
  }
}

function mapDispatch2Props(dispatch){
  return{
    fetchPlanets: function(){
      fetch('https://swapi.co/api/planets/')
        .then(resp => resp.json())
        .then(response =>

          dispatch(dispPlanets(response.results))

        );
    }
  }
}

export default connect(null, mapDispatch2Props)(App);
