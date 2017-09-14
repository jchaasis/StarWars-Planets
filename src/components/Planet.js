import React, { Component } from 'react';

class Planet extends Component{

  constructor(props){
    super(props);

    this.state = {
      results: [],
    };
  }

  componentDidMount() {

    fetch('http://swapi.co/api/planets/')
    .then(resp => resp.json())
    .then(response => {  this.setState({
      results: response.results
    });

    });
  }

  render() {

    const planets = this.state.results.map(planet => {

      return(
        <div className="planetDiv" key={planet.name}>
          <h3>{planet.name}</h3>
          <ul className="details">
            <li>Terrain: {planet.terrain}</li>
            <li>Climate: {planet.climate}</li>
            <li>Population: {planet.population}</li>
          </ul>

        </div>
      );

    })

    return (
        <div>
          <div className="planetsContainer">
            {planets}
          </div>
        </div>
    );

  }
}

export default Planet;
