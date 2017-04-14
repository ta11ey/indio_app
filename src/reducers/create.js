import { createSymbols } from '../actions/create.js'

const defaultState = {
 inputs: {}
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case createSymbols.addInput:
     return {
       ...state,
       inputs: {
         ...state.inputs,
         [action.id] : action.input
       }

     }
    case createSymbols.removeInput:
      const nextInputs = Object.assign({}, state.inputs);
      delete nextInputs[action.id]

       return {
         ...state,
         inputs: nextInputs
       }
    default:
      return state
  }
}
