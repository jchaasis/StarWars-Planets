import React, { Component } from 'react';

class Pilot extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      message: '',
    };
  }

  updateName(event){
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit(){
    this.setState({
      message: 'Well, ' + this.state.name + ', lets go conquer the galaxy! pick a planet and get going!'
    });
  }

  render(){

    if(this.state.message === ''){
      return(
        <div className = "pilotInput">
          <p> Greetings pilot, What shall we call you? </p>

                <input type="text" placeholder="Call sign"  onChange={(event) => this.updateName(event)}
                value={this.state.name} />
                <button onClick={() => this.handleSubmit()}>Lets go</button>

        </div>
      )
    } else {
      return(
        <div className = "pilotInput">
          <p> {this.state.message} </p>
        </div>
      )
    }

  }

}

export default Pilot;
