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

export function increaseScore(points){
  return{
    type: "SCORE",
    payload: points,
  }
}
