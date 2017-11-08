//actions

export function dispPlanets(planets){
  return{
    type: "GETPLANETS",
    payload: planets,
  }
}

export function currentPlanet(current){
  return{
    type: "CURRENT",
    payload: current
  }
}
