//actions

export function dispPlanets(planets){
  return{
    type: "GETPLANETS",
    payload: planets,
  }
}
