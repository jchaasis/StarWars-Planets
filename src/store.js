//create store
import { createStore } from 'redux';

function reducer(state, action){
  console.log(action)

  //get the planet information
  if (action.type === 'GETPLANETS'){
    console.log(action.payload)
  
    return {

      planets: action.payload,

    }
  }

  return state;
}

export default createStore(reducer, {
  planets: [],
},

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
