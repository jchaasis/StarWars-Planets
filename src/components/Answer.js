import React, { Component } from 'react';

//import actions
import {increaseScore} from '../actions'
//import goodies from redux
import { connect } from 'react-redux';
class Answer extends Component{
  constructor(props){
    super(props)

    this.state = {
      correct: '',
    }
  }

  handleAnswerSelection(ans){
    //shorten the current planet
    let cp = this.props.current
    console.log(ans)
    //if the answer selected matches the current planets info, increase the points by 10 and switch the state of correct to true, therefore giving it the correct answer class
    if(ans === cp.terrain || ans === cp.climate || ans === cp.population){
      this.props.score()
      this.setState({
        correct: true,
      })
    } else {
      //if the answer is incorrect, set the state of correct to false, therefore giving it the wrong answer class
        this.setState({
          correct: false,
        })
    }
  }

  render(){
    let answerClass;

    if(this.state.correct === true){
      answerClass = 'correctAnswer'
    } else if (this.state.correct === false){
      answerClass = 'wrongAnswer'
    } else {
      answerClass = 'answer'
    }

    return(
      <li className = {answerClass} onClick={ ()=> this.handleAnswerSelection(this.props.answer)} >  {this.props.answer} </li>
    )
  }
}

function mapDispatch2Props(dispatch){
  return{
    score: ()=>dispatch(increaseScore(10)),
  }
}

export default connect(null, mapDispatch2Props)(Answer);
