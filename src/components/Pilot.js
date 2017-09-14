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
    console.log(this.state.name);
  }

  handleSubmit(){
    this.setState({
      message: 'Well, ' + this.state.name + ', lets go conquer the galaxy! pick a planet and get going!'
    });
    console.log(this.state.name);
    console.log(this.state.message);
  }

  render(){

    return(
      <div className = "pilotInput">
        <p> Greetings pilot, What shall we call you? </p>

              <input type="text" placeholder="Call sign"  onChange={(event) => this.updateName(event)}
              value={this.state.name} />
              <button onClick={() => this.handleSubmit()}>Lets go</button>
          

        <p> {this.state.message} </p>
      </div>
    )

  }

}

export default Pilot;
