import React, { Component } from 'react';

//import redux goodies
import { connect } from 'react-redux';

//import components
import Answer from './Answer'

//import data
import { terrains, climates } from '../data'

//import actions
import { increaseScore } from '../actions'

class QuestionsPage extends Component{


  handleAnswerSelection(ans){
    //shorten the current planet
    let cp = this.props.current
    console.log(ans)
    //if the answer selected matches the current planets info, increase the points by 10
    if(ans === cp.terrain || ans === cp.climate || ans === cp.population){
      this.props.score()
    }
  }

  render() {

    let randomTerr = Math.floor(Math.random()*terrains.length)

    let randomClim = Math.floor(Math.random()*climates.length)

    //shortened for use below
    let curr = this.props.current;

    //if a planet hasn't been selected, display a message
    if (curr === ''){
      return (

            <div className="questionsContainer">
                <h1>Choose a planet to conquer first!</h1>
            </div>

      )
    } else {

    return (

          <div className="questionsContainer">
            <p> What is the terrain of {curr.name}? </p>
              <ol type="A">
                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} answer={terrains[randomTerr]} />

                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} answer={curr.terrain} />

                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} answer={terrains[randomTerr]} />
              </ol>

            <p> What is the climate of {curr.name}?</p>
              <ol type="A">
                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} answer={climates[randomClim]} />

                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} answer={curr.climate} />

                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} answer={climates[randomClim]} />
              </ol>
            <p> What is the population of {curr.name}? </p>
              <ol type="A">
                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} answer={terrains[randomTerr]} />

                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} answer={curr.population} />

                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} answer={terrains[randomTerr]} />
              </ol>

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

function mapDispatch2Props(dispatch){
  return{
    score: ()=>dispatch(increaseScore(10)),
  }
}

export default connect(mapState2Props, mapDispatch2Props)(QuestionsPage);
