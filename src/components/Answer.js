import React, { Component } from 'react';

class Answer extends Component{

  render(){
    return(
      <li onClick={ ()=> this.props.handleAnswer(this.props.answer)} >  {this.props.answer} </li>
    )
  }
}

export default Answer;
