import React, { Component } from 'react';

//import redux goodies
import { connect } from 'react-redux';

//import components
import Planet from './Planet';

class PlanetMap extends Component{
  constructor(props){
    super(props)

    this.state = {
      currentPlanet: null,
    }
  }
  //when a planet is clicked on the navbar, set that as the stat of the current planet so that we can display questions solely related to that planet
  handlePlanetClick(planet){
    console.log(this.state)
    this.setState({
      currentPlanet: planet,
    })
  }


  render() {
    //map through the planets and create a div for each one
    const planets = this.props.planets.map((planet,index) => <Planet key={index} planet={planet} handleClick={planetName=>this.handlePlanetClick(planetName)}/>
    )

    return (

          <div className="planetsContainer">
            {planets}
          </div>

    )
  }
}

function mapState2Props(state){
  return{
    planets: state.planets,
  }
}

export default connect(mapState2Props, null)(PlanetMap);
