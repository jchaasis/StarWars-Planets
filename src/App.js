import React, { Component } from 'react';
// import logo from './logo.svg';
//import styling
import './App.css';

//import redux goodies
import { connect } from 'react-redux';

//import actions
import { dispPlanets } from './actions'

//import components
import Pilot from './components/Pilot';
import PlanetMap from './components/PlanetMap';
import QuestionsPage from './components/QuestionsPage';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
    };
  }


  componentDidMount() {
  //get the planet data to then store in redux
  this.props.fetchPlanets()
  }

  //once the pilots name has been submitted, display the map and questions
  handlePilot(pilot){
    this.setState({
      name: pilot,
    })
  }

  render() {
  //when a name is entered, display the map and the questions section
  let planetMap = this.state.name === '' ? null : <PlanetMap/>
  let questions = this.state.name === '' ? null : <QuestionsPage/>
  let scoreBoard = this.state.name === '' ? null : `Score: ${this.props.score}`

    return (
      <div className="App">
        <div className="App-header">

        </div>
        <div id="mainHeader">
          <Pilot handlePilot={()=>this.handlePilot()}/>
          <h3>{scoreBoard}</h3>
        </div>
        <main>
          <div id="planetsNavBar">
            {planetMap}
          </div>
          <div id="questionsSection">
            {questions}
          </div>
        </main>

      </div>
    );
  }
}
function mapState2Props(state){
  return{
    score: state.score,
  }
}

function mapDispatch2Props(dispatch){
  return{
    fetchPlanets: function(){
      fetch('https://swapi.co/api/planets/')
        .then(resp => resp.json())
        .then(response =>
          dispatch(dispPlanets(response.results))
        );
    }
  }
}

export default connect(mapState2Props, mapDispatch2Props)(App);
