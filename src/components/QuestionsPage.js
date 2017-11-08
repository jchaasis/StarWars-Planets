import React, { Component } from 'react';

//import redux goodies
import { connect } from 'react-redux';

//import components
import Planet from './Planet';

class QuestionsPage extends Component{


  render() {

    console.log(this.props.current)
    //shortened for use below
    let curr = this.props.current;

    //if a planet hasn't been selected, display a message
    if (curr === undefined){
      return (

            <div className="questionsContainer">
                <h1>Choose a planet to conquer first!</h1>
            </div>

      )
    } else {

    return (

          <div className="questionsContainer">
            <p> What is the terrain of {curr.name}? </p>
            <p> What is the climate of {curr.name}?</p>
            <p> What is the population of {curr.name}? </p>

          </div>

    )}
  }
}

function mapState2Props(state){
  return{
    planets: state.planets,
    current: state.current,
  }
}

export default connect(mapState2Props, null)(QuestionsPage);
