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

    //create a class to designate which planet the pilot is currently on
    // if (this.props.planet.name === this.props.current.name) {
    //   console.log('currently on ' + this.props.current)
    // }
    //
    // let currentStyle = {
    //   backgroundColor: 'red',
    // }

    return (
      <div className="planetDiv" onClick={()=>this.props.getCurrent(this.props.planet)}>
        <h3 className='planetHeader'>{this.props.planet.name}</h3>
      </div>
    );

  }
}
function mapState2Props(state){
  return{
    current: state.current,
  }
}
function mapDispatch2Props(dispatch){
  return{
  getCurrent: planet => dispatch(currentPlanet(planet))
  }
}

export default connect(mapState2Props, mapDispatch2Props)(Planet);
