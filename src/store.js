//create store
import { createStore } from 'redux';

function reducer(state, action){
  console.log(action)

  //get the planet information
  if (action.type === 'GETPLANETS'){
    return {
      planets: action.payload,
      current: state.current,
      score: state.score,
    }
  }

  //get the current planet name
  if (action.type === 'CURRENT'){
    return{
      planets: state.planets,
      current: action.payload,
      score: state.score,
    }
  }

  if (action.type === 'SCORE'){
    return{
      planets: state.planets,
      current: state.current,
      score: state.score + action.payload,
    }
  }

  return state;
}

export default createStore(reducer, {
  planets: [],
  current: '',
  score: 0,
},

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
