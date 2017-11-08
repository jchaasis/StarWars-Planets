import React, { Component } from 'react';



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
      <div className="planetDiv">
        <h3>{this.props.planet.name}</h3>
      </div>
    );

  }
}

export default Planet;
