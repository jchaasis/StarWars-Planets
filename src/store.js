//create store
import { createStore } from 'redux';

function reducer(state, action){
  console.log(action)

  //get the planet information
  if (action.type === 'GETPLANETS'){
    return {

      planets: action.payload,

    }
  }

  //get the current planet name
  if (action.type === 'CURRENT'){
    return{
      planets: state.planets,
      current: action.payload,
    }
  }

  return state;
}

export default createStore(reducer, {
  planets: [],
  current: '',
},

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
