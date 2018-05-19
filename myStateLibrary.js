// Library Code
function createStore(reducer) {
  // The Store Should Have Four Parts
  // 1. The State
  // 2. Get the State
  // 3. Listen to changes on the state
  // 4. Update the state 


  //(1) The Current Applicatin State
  let state;

  let listeners = []
  // (2)Gets the Current State
  const getState = () => state;
  // (3)Takes in functions that will be called when the state changes
  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }
  // (4) Updates/Modifies the state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}