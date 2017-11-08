import React, { Component } from 'react';

//import goodies from redux
import { connect } from 'react-redux';

//import actions
import { currentPlanet } from '../actions'

class Planet extends Component{

  constructor(props){
    super(props);

    this.state = {
      results: [],
    };
  }


  render() {
    //map through the planets and create a div for each one

    return (
      <div className="planetDiv" onClick={()=>this.props.getCurrent(this.props.planet)}>
        <h3>{this.props.planet.name}</h3>
      </div>
    );

  }
}

function mapDispatch2Props(dispatch){
  return{
  getCurrent: planet => dispatch(currentPlanet(planet))
  }
}

export default connect(null, mapDispatch2Props)(Planet);
