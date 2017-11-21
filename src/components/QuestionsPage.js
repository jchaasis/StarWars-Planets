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
  constructor(props){
    super(props)

    this.state = {
      correct: '',
    }
  }


  handleAnswerSelection(ans){
    //shorten the current planet
    // let cp = this.props.current
    // console.log(ans)
    // //if the answer selected matches the current planets info, increase the points by 10 and switch the state of correct to true, therefore giving it the correct answer class
    // if(ans === cp.terrain || ans === cp.climate || ans === cp.population){
    //   this.props.score()
    //   this.setState({
    //     correct: true,
    //   })
    // } else {
    //   //if the answer is incorrect, set the state of correct to false, therefore giving it the wrong answer class
    //     this.setState({
    //       correct: false,
    //     })
    // }
  }

  componentDidMount(){
    let randomTerr = Math.floor(Math.random()*terrains.length)

    let randomClim = Math.floor(Math.random()*climates.length)
  }

  render() {
    let answerClass;
    if(this.state.correct === true){
      answerClass = 'correctAnswer'
    } else if (this.state.correct === false){
      answerClass = 'wrongAnswer'
    } else {
      answerClass = 'answer'
    }

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
                <Answer current={this.props.current} className={answerClass} handleAnswer={ans=> this.handleAnswerSelection(ans)} answer='wrong' />

                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} answer={curr.terrain}
                current={this.props.current} />

                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} answer='wrong'
                current={this.props.current} />
              </ol>

            <p> What is the climate of {curr.name}?</p>
              <ol type="A">
                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} current={this.props.current} answer='wrong' />

                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} current={this.props.current} answer={curr.climate} />

                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)} current={this.props.current} answer='wrong' />
              </ol>
            <p> What is the population of {curr.name}? </p>
              <ol type="A">
                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)}
                current={this.props.current} answer='wrong' />

                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)}
                current={this.props.current} answer={curr.population} />

                <Answer handleAnswer={ans=> this.handleAnswerSelection(ans)}
                current={this.props.current} answer='wrong' />
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
