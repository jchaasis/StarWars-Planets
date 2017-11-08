import React, { Component } from 'react';

//import redux goodies
import { connect } from 'react-redux';

//import components
import Planet from './Planet';

class PlanetMap extends Component{

  constructor(props){
    super(props);

    this.state = {
      results: [],
    };
  }


  render() {
    //map through the planets and create a div for each one
    const planets = this.props.planets.map((planet,index) => <Planet key={index} planet={planet} />
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
